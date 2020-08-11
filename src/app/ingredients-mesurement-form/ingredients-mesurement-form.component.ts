import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientMeasurment} from '../model/ingredientMeasurment';
import {IngredientMeasurmentServiceService} from '../service/ingredient-measurment-service.service';

@Component({
  selector: 'app-ingredients-mesurement-form',
  templateUrl: './ingredients-mesurement-form.component.html',
  styleUrls: ['./ingredients-mesurement-form.component.css']
})
export class IngredientsMesurementFormComponent {

  ingredientsMesurment: IngredientMeasurment;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private ingredientMeasurmentServiceService: IngredientMeasurmentServiceService) {
    this.ingredientsMesurment = new IngredientMeasurment();
  }
  onSubmit() {
    this.ingredientMeasurmentServiceService.save(this.ingredientsMesurment).subscribe(result => this.gotoIngredientMeasurmentList());
  }
    gotoIngredientMeasurmentList() {
      this.router.navigate(['/ingredients-mesurment']);
    }

  }
