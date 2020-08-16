import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../model/recipe';


@Component({
    selector: 'app-recipe-view',
    templateUrl: './recipe-view.component.html'
})

export class RecipeViewComponent implements OnInit {
    recipe: Recipe = null;
    constructor(
        private recipeService: RecipeService
    ){}

    ngOnInit(){
        this.recipeService.getRecipeById(1).subscribe(data => {
            // console.log(data);
            this.recipe = data;
            console.log(this.recipe);
        });
    }

}
