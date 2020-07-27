import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {

  }
  submit(check)
  {
    return this.http.post<any>(`http://localhost:3000/company`,check);
  }
}
