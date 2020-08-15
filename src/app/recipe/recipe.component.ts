import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


@Component({
    selector: 'app-recipe',
    templateUrl: 'recipe.component.html'
})

export class RecipeComponent implements OnInit {
    recipeForm: FormGroup;

    ngOnInit(){
        this.recipeForm = new FormGroup({
            'recipe-name': new FormControl(null),
            instructions: new FormControl(null),
            'recipe-ingredients': new FormArray([])
        });
    }

    onAddIngredient(){
        const control = new FormControl(null);
        (this.recipeForm.get('recipe-ingredients') as FormArray).push(control);
        console.log('added 1 more');
    }

    get controls() {
        return (this.recipeForm.get('recipe-ingredients') as FormArray).controls;
        console.log('got back 1 more');
      }

    onSubmit(){}
}
