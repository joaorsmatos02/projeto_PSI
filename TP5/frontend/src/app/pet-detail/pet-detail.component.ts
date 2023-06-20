import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { PetService } from '../pet.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent {
  pet: Pet | undefined;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.petService.getPet(id)
      .subscribe(pet => this.pet = pet);
  }

  goBack(): void {
    this.location.back();
  }
}
