import {Component, OnInit} from '@angular/core';
import {IngredientMeasurement} from '../model/ingredientMeasurement';
import {IngredientMeasurementServiceService} from '../service/ingredient-measurement-service.service';

@Component({
  selector: 'app-ingredients-measurment-list',
  templateUrl: './ingredients-measurement-list.component.html',
  styleUrls: ['./ingredients-measurement-list.component.css']
})
export class IngredientsMeasurmentListComponent implements OnInit {
  ingredientMeasurements: IngredientMeasurement[];

  constructor(private ingredientMeasurementServiceService: IngredientMeasurementServiceService) {
  }


  ngOnInit(): void {
    this.ingredientMeasurementServiceService.findAll().subscribe(data => {
      this.ingredientMeasurements = data;
    });
  }

}