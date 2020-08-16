import {Component, OnInit} from '@angular/core';
import {IngredientMeasurement} from '../model/ingredientMeasurement';
import {IngredientMeasurementService} from '../service/ingredient-measurment.service';


@Component({
  selector: 'app-ingredients-measurement-list',
  templateUrl: './ingredients-measurement-list.component.html',
  styleUrls: ['./ingredients-measurement-list.component.css']
})
export class IngredientsMeasurementListComponent implements OnInit {
  ingredientMeasurements: IngredientMeasurement[];

  constructor(private ingredientMeasurementService: IngredientMeasurementService) {
  }


  ngOnInit(): void {
    this.ingredientMeasurementService.findAll().subscribe(data => {
      this.ingredientMeasurements = data;
    });
  }

}
