import { IngredientService } from '../../../../../../service/ingredient.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../../../../../../model/ingredient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent  {

  ingredient: Ingredient;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ingredientService: IngredientService
  ) {
    this.ingredient = new Ingredient();
  }

  onSubmit() {
    this.ingredientService.save(this.ingredient).subscribe(result => this.gotoIngredientList());
  }

  gotoIngredientList() {
    this.router.navigate(['/ingredients']);
  }

}
