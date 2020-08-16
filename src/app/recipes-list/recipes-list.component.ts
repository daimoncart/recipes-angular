import {Component, OnInit} from '@angular/core';
import {RecipeView} from '../model/recipe-view';
import {RecipeService} from '../service/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeView[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.findAll().subscribe(data => {
      this.recipes = data;
    });
  }
}
