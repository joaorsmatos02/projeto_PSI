import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', pet: { name: 'No Pet' }},
      { id: 13, name: 'Bombasto', pet: { name: 'No Pet' }},
      { id: 14, name: 'Celeritas', pet: { name: 'No Pet' }},
      { id: 15, name: 'Magneta', pet: { name: 'No Pet' }},
      { id: 16, name: 'RubberMan', pet: { name: 'No Pet' }},
      { id: 17, name: 'Dynama', pet: { name: 'No Pet' }},
      { id: 18, name: 'Dr. IQ', pet: { name: 'No Pet' }},
      { id: 19, name: 'Magma', pet: { name: 'No Pet' }},
      { id: 20, name: 'Tornado', pet: { name: 'No Pet' }}
    ];

    const pets = [
      { name: 'Cat' },
      { name: 'Dog' },
      { name: 'Rabbit' },
    ];

    return {heroes, pets};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
