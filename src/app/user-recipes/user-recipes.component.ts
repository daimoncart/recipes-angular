import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './../service/recipe.service';
import { Recipe } from './../model/recipe';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-recipes',
    templateUrl: './user-recipes.component.html',
    styleUrls: ['../recipes-list/recipes-list.component.css', '../recipe-form/recipe-form.component.css'],
    styles: ['.name {font-weight: 800; color: #17a2b8; font-size: 2.1rem;}']
})

export class UserRecipesComponent implements OnInit{
    recipes: Recipe[] = [];
    isRequestInProgress = true;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ){}

    ngOnInit() {
        const name = this.route.snapshot.paramMap.get('name');
        console.log(name);
        this.recipeService.findByUserName(name).subscribe(data => {
          console.log(data);
          this.recipes = data;
          this.isRequestInProgress = false;
        });
      }
}
