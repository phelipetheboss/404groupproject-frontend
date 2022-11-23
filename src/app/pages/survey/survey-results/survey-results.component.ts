import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../crud/crud-http.service';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.css']
})
export class SurveyResultsComponent implements OnInit {
  surveyList: any = [];
  responses: any = []

  constructor(private crudHttpService: CrudHttpService) {
    
  }

  ngOnInit(): void {
    this.listSurveys();
  }

  listSurveys(){
    this.crudHttpService.listSurveys().subscribe((response)=>{
      this.surveyList = response;

      for(let survey of this.surveyList){
        this.crudHttpService.listResponsesBySurvey(survey._id).subscribe((r)=>{
          survey['totalResponses'] = r;
        });
        for(let question of survey.questions){
          if(question.questionType === "multipleChoice"){
            this.crudHttpService.listResponsesByQuestion(survey._id , question._id, question.optionA).subscribe((r)=>{
              question['responseA'] = (r/survey.totalResponses)*100;
            });
            this.crudHttpService.listResponsesByQuestion(survey._id , question._id, question.optionB).subscribe((r)=>{
              question['responseB'] = (r/survey.totalResponses)*100;
            });
            this.crudHttpService.listResponsesByQuestion(survey._id , question._id, question.optionC).subscribe((r)=>{
              question['responseC'] = (r/survey.totalResponses)*100;
            });
            this.crudHttpService.listResponsesByQuestion(survey._id , question._id, question.optionD).subscribe((r)=>{
              question['responseD'] = (r/survey.totalResponses)*100;
            });
          }
          else{
            this.crudHttpService.listResponsesByQuestion(survey._id , question._id, "true").subscribe((r)=>{
              question['responseTrue'] = (r/survey.totalResponses)*100;
            });
            this.crudHttpService.listResponsesByQuestion(survey._id , question._id, "false").subscribe((r)=>{
              question['responseFalse'] = (r/survey.totalResponses)*100;
            });
          }
        }
      }

    },(error=>{

    }));
  }

}
