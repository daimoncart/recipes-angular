import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientMeasurment} from '../model/ingredientMeasurment';
import {IngredientMeasurmentService} from '../service/ingredient-measurment.service';

@Component({
  selector: 'app-ingredients-mesurement-form',
  templateUrl: './ingredients-mesurement-form.component.html',
  styleUrls: ['./ingredients-mesurement-form.component.css']
})
export class IngredientsMesurementFormComponent {

  ingredientsMesurment: IngredientMeasurment;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private ingredientMeasurmentServiceService: IngredientMeasurmentService) {
    this.ingredientsMesurment = new IngredientMeasurment();
  }
  onSubmit() {
    this.ingredientMeasurmentServiceService.save(this.ingredientsMesurment).subscribe(result => this.gotoIngredientMeasurmentList());
  }
    gotoIngredientMeasurmentList() {
      this.router.navigate(['/ingredients-mesurment']);
    }

  }
