import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../../../service/auth/guards/auth.guard';
import {IngredientListComponent} from './components/ingredient-components/ingredient-list/ingredient-list.component';
import {Role} from '../../../model/role';
import {IngredientFormComponent} from './components/ingredient-components/ingredient-form/ingredient-form.component';
import {UomListComponent} from './components/uom-components/uom-list/uom-list.component';
import {UomFormComponent} from './components/uom-components/uom-form/uom-form.component';
import {RecipeFormComponent} from './components/recipe-components/recipe-form/recipe-form.component';
import {IngredientsMeasurementListComponent} from './components/ingredient-measurement-components/ingredients-measurement-list/ingredients-measurement-list.component';
import {IngredientMeasurementFormComponent} from './components/ingredient-measurement-components/ingredients-measurement-form/ingredient-measurement-form.component';
import {RecipeViewComponent} from './components/recipe-components/recipe-view/recipe-view.component';
import {RecipeListComponent} from './components/recipe-components/recipes-list/recipes-list.component';
import {MyRecipeListComponent} from './components/recipe-components/my-recipe-list/my-recipe-list.component';
import {UserRecipesComponent} from './components/recipe-components/user-recipes/user-recipes.component';


const routes: Routes = [
  {canActivate: [AuthGuard], path: 'ingredients', component: IngredientListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveingredient', component: IngredientFormComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'uoms', component: UomListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveuom', component: UomFormComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saverecipe', component: RecipeFormComponent},
  {canActivate: [AuthGuard], path: 'ingredientsMeasurment', component: IngredientsMeasurementListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveingredientsMeasurment', component: IngredientMeasurementFormComponent, data: {roles: [Role.Admin]}},
  {path: 'recipe/:recipeId', component: RecipeViewComponent},
  {path: 'recipes', component: RecipeListComponent},
  {canActivate: [AuthGuard], path: 'my-recipes', component: MyRecipeListComponent},
  {path: ':name/recipes', component: UserRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
