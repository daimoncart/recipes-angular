import { IngredientBlock } from './ingredient-block';
import { Ingredient } from './ingredient';
import { Uom } from './uom';
export class Recipe {
    id: number;
    name: string;
    instructions: string;
    link: string;
    userId: number;
    ingredientBlock: IngredientBlock[];
    // ingredientList: [{
    //     ingredient: Ingredient;
    //     uom: Uom;
    //     quantity: number;
    // }];
    // ingredientList: [{
    //     quantity: number,
    //     measurement: string,
    //     product: string
    // }];
}
