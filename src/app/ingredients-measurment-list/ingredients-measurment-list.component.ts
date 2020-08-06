import {Component, OnInit} from '@angular/core';
import {IngredientMeasurment} from '../model/ingredientMeasurment';
import {IngredientMeasurmentServiceService} from '../service/ingredient-measurment-service.service';

@Component({
  selector: 'app-ingredients-measurment-list',
  templateUrl: './ingredients-measurment-list.component.html',
  styleUrls: ['./ingredients-measurment-list.component.css']
})
export class IngredientsMeasurmentListComponent implements OnInit {
  ingredientsMeasurment: IngredientMeasurment[];

  constructor(private ingredientMeasurmentServiceService: IngredientMeasurmentServiceService) {
  }


  ngOnInit(): void {
    this.ingredientMeasurmentServiceService.findAll().subscribe(data => {
      this.ingredientsMeasurment = data;
    });
  }

}
