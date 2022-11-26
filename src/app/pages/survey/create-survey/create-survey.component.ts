import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../crud/crud-http.service';
import {FormArray, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent{
  public currentDate = new Date().toISOString().split('T')[0];

  survey = this.fb.group({
    surveyName: '',
    lastModification: this.currentDate,
    startDate: '',
    endDate: '',
    questions: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private crudHttpService: CrudHttpService, private router: Router) { }

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

  removeQuestion(questionIndex: number){
    this.questions.removeAt(questionIndex);
  }

  createSurvey(survey: any){
    this.crudHttpService.createSurvey(survey).subscribe();
    this.router.navigate(['/home']);
  }
}
