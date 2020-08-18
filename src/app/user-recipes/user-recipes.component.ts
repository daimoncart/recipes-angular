import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './../service/recipe.service';
import { Recipe } from './../model/recipe';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-recipes',
    templateUrl: './user-recipes.component.html',
    styleUrls: ['./user-recipes.component.css']
})

export class UserRecipesComponent implements OnInit{
    recipes: Recipe[] = [];

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
        });
      }
}
