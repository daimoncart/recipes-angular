import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../../../service/recipe.service';
import { Recipe } from '../../../../../../model/recipe';


@Component({
    selector: 'app-recipe-view',
    templateUrl: './recipe-view.component.html',
    styles: [
        '.ingr {background-color: #eff}',
        '.name {font-weight: 800; color: #17a2b8; font-size: 2.1rem;}',
        '.emphasized {font-weight: 500; color: black; font-size: 1.2rem; margin-top: 1.2rem;}',
        'a {color: #3ad4da;}',
        '.food-image {   width: auto; max-height: 50rem}',
 ]
})

export class RecipeViewComponent implements OnInit {
    recipe: Recipe = null;
    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ){}

    ngOnInit(){
        const id = +this.route.snapshot.paramMap.get('recipeId');
        this.recipeService.getRecipeById(id).subscribe(data => {
            console.log(data);
            this.recipe = data;
            console.log(this.recipe);
        });
    }

}
