import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IngredientService } from '../../../../../../service/ingredient.service';
import { Component } from '@angular/core';
import { Ingredient} from '../../../../../../model/ingredient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent  {

  ingredient: Ingredient = new Ingredient();
  ingredientForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder
  ) {
    this.ingredientForm = formBuilder.group({
      ingredientName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.ingredient.name = this.ingredientForm.value.ingredientName;
    console.log(this.ingredient.name);
    this.ingredientService.save(this.ingredient).subscribe(result => this.gotoIngredientList());
  }

  gotoIngredientList() {
    this.router.navigate(['/ingredients']);
  }

}
