import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientMeasurement} from '../model/ingredientMeasurement';
import {IngredientMeasurementServiceService} from '../service/ingredient-measurement-service.service';

@Component({
  selector: 'app-ingredients-measurement-form',
  templateUrl: './ingredient-measurement-form.component.html',
  styleUrls: ['./ingredient-measurement-form.component.css']
})
export class IngredientMeasurementFormComponent {

  ingredientMeasurement: IngredientMeasurement;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ingredientMeasurementServiceService: IngredientMeasurementServiceService) {
    this.ingredientMeasurement = new IngredientMeasurement();
  }
  onSubmit() {
    this.ingredientMeasurementServiceService.save(this.ingredientMeasurement).subscribe(result => this.gotoIngredientMeasurementList());
  }
    gotoIngredientMeasurementList() {
      this.router.navigate(['/ingredients-measurement']);
    }

  }
