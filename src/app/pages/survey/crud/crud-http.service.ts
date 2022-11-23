import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  apiUrlGetSurvey: string = 'http://localhost:3000/api/get/surveys';
  apiUrlGetResponse: string = 'http://localhost:3000/api/get/responses';
  apiUrlPostSurvey: string = 'http://localhost:3000/api/post/surveys';
  apiUrlPostResponses: string = 'http://localhost:3000/api/post/responses';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createSurvey(survey: any): Observable<any> {
    let API_URL = `${this.apiUrlPostSurvey}`;
    return this.http.post(API_URL, survey);
  }

  createResponse(response: any): Observable<any>{
    let API_URL = `${this.apiUrlPostResponses}`;
    return this.http.post(API_URL, response);
  }

  listResponsesByQuestion(surveyId: any , questionId: any, response: any) : Observable<any>{
    let API_URL = `${this.apiUrlGetResponse}/${surveyId}/${questionId}/${response}`;
    return this.http.get<JSON>(API_URL);
  }

  listResponsesBySurvey(surveyId: any) : Observable<any>{
    let API_URL = `${this.apiUrlGetResponse}/${surveyId}`;
    return this.http.get<JSON>(API_URL);
  }

  listSurveys() {
    return this.http.get(`${this.apiUrlGetSurvey}`);
  }
  
  listSurveyById(id: any): Observable<JSON> {
    let API_URL = `${this.apiUrlGetSurvey}/${id}`;
    return this.http.get<JSON>(API_URL);
  }

  updateSurvey(id: any, updatedSurvey: any) {
    let API_URL = `${this.apiUrlPostSurvey}/${id}`;
    return this.http.post(API_URL, updatedSurvey).subscribe();
  }

  deleteSurvey(id: any){
    let API_URL = `${this.apiUrlGetSurvey}/${id}`;

    return this.http.delete(API_URL);
  }
}
