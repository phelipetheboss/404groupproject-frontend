import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../crud/crud-http.service';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {
  surveyList:any = [];

  constructor( private crudHttpService: CrudHttpService) { }

  ngOnInit(): void {
    this.listSurveys();
  }

  listSurveys(){
    this.crudHttpService.listSurveys().subscribe((response)=>{
      this.surveyList = response;
    },(error=>{

    }));
  }

  deleteSurvey(id: any){
    this.crudHttpService.deleteSurvey(id).subscribe((result) => {
      console.log(result);
    });
  }

  isAvailable(survey: any): Boolean{
    let result: Boolean;
    let currentDate = new Date(Date.now()).toISOString().split('T')[0];
    
    if(survey.startDate <= currentDate && survey.endDate >= currentDate)
      result = true;
    else 
      result = false;
    
    return result;   
  }
}
