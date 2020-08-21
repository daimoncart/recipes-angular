import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../service/recipe.service';
import {Recipe} from '../model/recipe';


@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styles: [
    '.ingr {background-color: #eff; font-size: 1.3rem; padding-top: 1rem }',
    '.name {font-weight: 800; color: #17a2b8; font-size: 2.1rem;}',
    '.instructions {font-size: 1.4rem; margin-top: 0.6rem; background-color: white; padding: 2rem}',]
})

export class RecipeViewComponent implements OnInit {
  recipe: Recipe = null;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('recipeId');
    this.recipeService.getRecipeById(id).subscribe(data => {
      console.log(data);
      this.recipe = data;
      console.log(this.recipe);
    });
  }

}
