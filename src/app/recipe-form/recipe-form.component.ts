import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Recipe } from '../model/recipe';

@Component({
    selector: 'app-recipe-form',
    templateUrl: 'recipe-form.component.html',
    styleUrls: ['recipe-form.component.css']
})

export class RecipeFormComponent implements OnInit {
    recipeForm: FormGroup;
    valueChangedTracked: any;
    itemsArr: FormArray;
    recipe: Recipe = new Recipe();

    constructor(private formBuilder: FormBuilder){
        this.recipeForm = formBuilder.group({
            // name: new FormControl,
            name: ['', Validators.required],
            // instructions: new FormControl,
            instructions: ['', [Validators.required, Validators.minLength(10)]],
            link: new FormControl(),
            items: this.formBuilder.array([
                this.formBuilder.group({
                    quantity: ['', Validators.required],
                    measurement: ['', Validators.required],
                    product: ['', Validators.required]
                })
            ])}
            );

    }

    onSubmit(recipeForm: FormGroup){
        // console.log(this.recipeForm.value.name);
        // console.log(this.recipeForm.value);
        this.recipe.name = this.recipeForm.value.name;
        this.recipe.instructions = this.recipeForm.value.instructions;
        this.recipe.link = this.recipeForm.value.link;
        for (const control of this.items.controls) {
            // if (value instanceof FormControl) {
            //    //console.log(value);
            // }
            // if (value instanceof FormGroup) {
                // this.recipe.ingredientList.push(
                //     control.value.quantity,
                //     control.value.measurement,
                //     control.value.product
                // );
                const temp = {
                    quantity: 12,
                    measurement: 'sdfsdf',
                    product: 'sadfsadf'

                };
                this.recipe.ingredientList.push(temp);
                console.log(this.recipe);
            // if (value instanceof FormArray) {
            //     console.log(value);
            //     console.log("Array");
            // }
         }
        // console.log(this.items);
        // console.log(this.recipe.name);


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
        console.log(this.recipeForm.get('items').value.length);
        console.log(this.recipeForm.get('items').value);
    }


    get items(){
        return this.recipeForm.get('items') as FormArray;
    }

    removeItem(i: number){
        if (this.items.length === 1){return; }

        this.items.removeAt(i);
    }

    addItem(){
        const newItem = this.formBuilder.group({
            quantity: ['', Validators.required],
            measurement: ['', Validators.required],
            product: ['', Validators.required]
        });

        this.items.push(newItem);

    }
}
