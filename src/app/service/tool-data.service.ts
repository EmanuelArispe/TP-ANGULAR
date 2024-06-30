import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tools } from '../tools-list/Tools';

const URL = 'https://66819b3404acc3545a07276d.mockapi.io/api/v1/article';

@Injectable({
  providedIn: 'root'
})
export class ToolDataService {

  constructor( private http:HttpClient) { }

  public getAll(): Observable<Tools[]>{
  return this.http.get<Tools[]>(URL);
  }

}
