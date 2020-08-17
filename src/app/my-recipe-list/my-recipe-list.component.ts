import { RecipeService } from './../service/recipe.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from "@angular/core";
import { Recipe } from '../model/recipe';

@Component ({
    selector: 'app-my-recipe-list',
    templateUrl: './my-recipe-list.component.html',
    styles: ['.thumb {max-height: 15rem; max-width: 15rem;}']
})

export class MyRecipeListComponent implements OnInit {

    recipes: Recipe[] = [];

    constructor(
       private recipeService: RecipeService
    ){}

    ngOnInit(): void {
        this.recipeService.findMyRecipes().subscribe(data => {
            this.recipes = data;
          });
    }
}