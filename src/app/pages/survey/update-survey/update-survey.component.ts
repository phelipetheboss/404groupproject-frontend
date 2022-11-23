import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudHttpService } from '../crud/crud-http.service';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-survey',
  templateUrl: './update-survey.component.html',
  styleUrls: ['./update-survey.component.css']
})

export class UpdateSurveyComponent{
  public mySurvey: any;
  public id: any;
  survey = this.fb.group({
    surveyName: '',
    lastModification: '',
    startDate: '',
    endDate: '',
    questions: this.fb.array([])
  });

  constructor(private route: ActivatedRoute, private crudHttpService: CrudHttpService, private router: Router, private fb: FormBuilder) { 
    this.id = route.snapshot.paramMap.get('id');
    this.crudHttpService.listSurveyById(this.id).subscribe((response)=>{
      this.mySurvey = response;
      this.survey = this.fb.group({
        surveyName: [this.mySurvey.surveyName],
        lastModification: [this.mySurvey.lastModification],
        startDate: [this.mySurvey.startDate],
        endDate: [this.mySurvey.endDate],
        questions: this.fb.array(this.mySurvey.questions.map((r: any) => this.fb.group(r)))
      });
    },(error=>{

    }));
  }

  get questions(){
    return this.survey.controls["questions"] as FormArray;
  }

  addQuestion(){
    const questionForm = this.fb.group({
      description: ['', Validators.required],
      questionType: ['',Validators.required],
      optionA: ['',Validators.required],
      optionB: ['',Validators.required],
      optionC: ['',Validators.required],
      optionD: ['',Validators.required]
    });

    this.questions.push(questionForm);
  }

  updateSurvey(data: any){
    this.crudHttpService.updateSurvey(this.id,data);
    this.router.navigate(['/home']);
  }

  removeQuestion(questionIndex: number){
    this.questions.removeAt(questionIndex);
  }


}





