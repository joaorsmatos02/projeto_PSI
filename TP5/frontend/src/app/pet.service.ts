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
    
    private petsUrl = 'api/pets'; 
    private petUrl = 'api/pet'; 

    getPets(): Observable<Pet[]> {
      return this.http.get<Pet[]>(this.petsUrl);
    }

    getPet(id: string): Observable<Pet> {
      const url = `${this.petUrl}/${id}`;
      return this.http.get<Pet>(url);
    }
  }