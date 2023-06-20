import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressApiService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${path}`);
  }

  post(path: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${path}`, data);
  }
}
