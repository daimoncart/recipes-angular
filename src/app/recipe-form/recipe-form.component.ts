import { RecipeService } from '../service/recipe.service';
import { IngredientBlock } from '../model/ingredient-block';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RecipeTO } from '../model/recipe-to';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-form',
    templateUrl: 'recipe-form.component.html',
    styleUrls: ['recipe-form.component.css']
})

export class RecipeFormComponent implements OnInit {
    recipeForm: FormGroup;
    valueChangedTracked: any;
    recipe: RecipeTO = new RecipeTO();

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private recipeService: RecipeService){


        this.recipeForm = formBuilder.group({
            // name: new FormControl,
            name: ['', Validators.required],
            // instructions: new FormControl,
            instructions: ['', [Validators.required, Validators.minLength(10)]],
            link: new FormControl(),
            ingredientBlock: this.formBuilder.array([
                this.createIngredientBlock()
            ])}
            );

    }

    onSubmit(recipeForm: FormGroup){
                // console.log(this.recipeForm.value.name);
        // console.log(this.recipeForm.value);
        // this.recipe.name = this.recipeForm.value.name;
        // this.recipe.instructions = this.recipeForm.value.instructions;
        this.recipe = this.recipeForm.getRawValue();
        // this.recipe.link = this.recipeForm.value.link;
        // const temp = Array<IngredientBlock>();

        // for (const control of this.items.controls) {
        //     temp.push(
        //         {quantity: control.value.quantity,
        //         measurementUnit: control.value.measurement,
        //         ingredient: control.value.product}
        //     );
        // }
        // this.recipe.ingredientBlock = temp;
        console.log(this.recipe);

        this.recipeService.save(this.recipe).subscribe(result => this.goSomewhere());
    }

    goSomewhere() {
        this.router.navigate(['/saverecipe']);
      }

    resetForm(){
        this.recipeForm.reset();
        this.items.clear();
        this.addItem();
    }


    ngOnInit(): void {
        this.recipeForm.valueChanges.subscribe (data => {
            this.valueChangedTracked = data;
        });
        // console.log(this.recipeForm.get('items').value.length);
        // console.log(this.recipeForm.get('items').value);
    }


    get items(){
        return this.recipeForm.get('ingredientBlock') as FormArray;
    }

    removeItem(i: number){
        if (this.items.length === 1){return; }

        this.items.removeAt(i);
    }

    private createIngredientBlock() {
        return this.formBuilder.group({
            quantity: ['', Validators.required],
            measurementUnit: ['', Validators.required],
            ingredient: ['', Validators.required]
        });
    }

    addItem(){
        this.items.push(this.createIngredientBlock());
    }
}
