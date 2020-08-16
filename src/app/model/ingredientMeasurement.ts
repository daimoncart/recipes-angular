import {Ingredient} from './ingredient';
import {Uom} from './uom';

export class IngredientMeasurement {
  ingredient: Ingredient;
  measurementUnit: Uom;

  ingredientId: number;
  measurementUnitId: number;
}
