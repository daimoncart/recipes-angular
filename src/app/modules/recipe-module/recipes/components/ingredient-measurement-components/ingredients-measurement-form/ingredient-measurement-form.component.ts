import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientMeasurement} from '../../../../../../model/ingredientMeasurement';

import {UomService} from '../../../../../../service/uom.service';
import {Ingredient} from '../../../../../../model/ingredient';
import {Uom} from '../../../../../../model/uom';
import {IngredientService} from '../../../../../../service/ingredient.service';
import {IngredientMeasurementService} from '../../../../../../service/ingredient-measurment.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ingredients-measurement-form',
  templateUrl: './ingredient-measurement-form.component.html',
  styleUrls: ['./ingredient-measurement-form.component.css']
})
export class IngredientMeasurementFormComponent implements OnInit {

  measurementForm: FormGroup;
  availableUnitsOfMeasure: Uom[] = [];
  availableIngredients: Ingredient[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ingredientMeasurementService: IngredientMeasurementService,
              private uomService: UomService,
              private ingredientService: IngredientService,
              private formMeasurementBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.uomService.findAll().subscribe(result => {
      this.availableUnitsOfMeasure = result;
    });

    this.ingredientService.findAll().subscribe((result => {
      this.availableIngredients = result;
    }));

    this.measurementForm = this.formMeasurementBuilder.group({
      measurementId: ['', Validators.required],
      ingredientId: ['', Validators.required]
    });
  }


  onSubmit() {
    const values = this.measurementForm.getRawValue();

    const ingredientMeasurement: IngredientMeasurement = new IngredientMeasurement();
    ingredientMeasurement.ingredientId = values.ingredientId;
    ingredientMeasurement.measurementUnitId = values.measurementId;

    this.ingredientMeasurementService.save(ingredientMeasurement).subscribe(result => this.gotoIngredientMeasurementList());
  }

  gotoIngredientMeasurementList() {
    this.router.navigate(['/ingredientsMeasurment']);
  }

}
