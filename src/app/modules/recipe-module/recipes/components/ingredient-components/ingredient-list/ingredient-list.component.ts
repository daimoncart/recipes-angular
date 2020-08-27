import { IngredientService } from '../../../../../../service/ingredient.service';
import { Ingredient } from '../../../../../../model/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.findAll().subscribe(data => {
      this.ingredients = data;
    });
  }

}
