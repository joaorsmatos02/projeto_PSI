import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pet';

@Injectable({
    providedIn: 'root',
  })
  export class PetService {
    constructor(
      private http:HttpClient
    ) { }
    private petUrl = 'api/pets'; 

    getPets(): Observable<Pet[]> {
      return this.http.get<Pet[]>(this.petUrl);
    }
  }