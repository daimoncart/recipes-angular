import {HomeComponent} from './home/home.component';
import {MyRecipeListComponent} from './my-recipe-list/my-recipe-list.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {UomFormComponent} from './uom-form/uom-form.component';
import {UomListComponent} from './uom-list/uom-list.component';
import {IngredientFormComponent} from './ingredient-form/ingredient-form.component';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeViewComponent} from './recipe-view/recipe-view.component';
import {AuthGuard} from './service/auth/guards/auth.guard';
import {Role} from './model/role';
import {IngredientsMeasurementListComponent} from './ingredients-measurement-list/ingredients-measurement-list.component';
import {IngredientMeasurementFormComponent} from './ingredients-measurement-form/ingredient-measurement-form.component';
import {RecipeListComponent} from './recipes-list/recipes-list.component';
import {UserRecipesComponent} from './user-recipes/user-recipes.component';
import {NotFoundComponent} from './not-found-component/not-found-component.component';

const routes: Routes = [
  {canActivate: [AuthGuard], path: 'ingredients', component: IngredientListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveingredient', component: IngredientFormComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'uoms', component: UomListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveuom', component: UomFormComponent, data: {roles: [Role.Admin]}},
  {path: '', component: HomeComponent},
  {canActivate: [AuthGuard], path: 'saverecipe', component: RecipeFormComponent},
  {canActivate: [AuthGuard], path: 'ingredientsMeasurment', component: IngredientsMeasurementListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveingredientsMeasurment', component: IngredientMeasurementFormComponent, data: {roles: [Role.Admin]}},
  {path: 'recipe/:recipeId', component: RecipeViewComponent},
  {path: 'recipes', component: RecipeListComponent},
  {canActivate: [AuthGuard], path: 'my-recipes', component: MyRecipeListComponent},
  {path: ':name/recipes', component: UserRecipesComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
