import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientMeasurement} from '../model/ingredientMeasurement';
import {IngredientMeasurementServiceService} from '../service/ingredient-measurement-service.service';
import {UomService} from '../service/uom.service';
import {Ingredient} from '../model/ingredient';
import {Uom} from '../model/uom';
import {IngredientService} from '../service/ingredient.service';

@Component({
  selector: 'app-ingredients-measurement-form',
  templateUrl: './ingredient-measurement-form.component.html',
  styleUrls: ['./ingredient-measurement-form.component.css']
})
export class IngredientMeasurementFormComponent implements OnInit {

  ingredientMeasurement: IngredientMeasurement;
  ingredient: Ingredient;
  uom: Uom;

  availableUnitsOfMeasure: Uom[] = [];
  availableIngredients: Ingredient[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ingredientMeasurementServiceService: IngredientMeasurementServiceService,
              private uomService: UomService,
              private ingredientService: IngredientService) {

    this.ingredientMeasurement = new IngredientMeasurement();
  }

  ngOnInit(): void {

    this.uomService.findAll().subscribe(result => {
      this.availableUnitsOfMeasure = result;
    }),
      this.ingredientService.findAll().subscribe((result => {
        this.availableIngredients = result;
      }));
  }


  onSubmit() {
    this.ingredientMeasurementServiceService.save(this.ingredientMeasurement).subscribe(result => this.gotoIngredientMeasurementList());
  }

  gotoIngredientMeasurementList() {
    this.router.navigate(['/ingredients-measurement']);
  }

}
