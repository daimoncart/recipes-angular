import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RegisterComponent} from './register/register.component';
import {UomFormComponent} from './uom-form/uom-form.component';
import {UomListComponent} from './uom-list/uom-list.component';
import {IngredientFormComponent} from './ingredient-form/ingredient-form.component';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {LoginComponent} from './login/login.component';
import {IngredientMeasurementFormComponent} from './ingredients-measurement-form/ingredient-measurement-form.component';
import {IngredientsMeasurmentListComponent} from './ingredients-measurement-list/ingredients-measurment-list.component';
import {RecipeViewComponent} from './recipe-view/recipe-view.component';
import {AuthGuard} from "./service/auth/guards/auth.guard";
import {Role} from "./model/role";

const routes: Routes = [
  {canActivate: [AuthGuard], path: 'users', component: UserListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveuser', component: UserFormComponent},
  {canActivate: [AuthGuard], path: 'ingredients', component: IngredientListComponent},
  {canActivate: [AuthGuard], path: 'saveingredient', component: IngredientFormComponent},
  {canActivate: [AuthGuard], path: 'uoms', component: UomListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveuom', component: UomFormComponent, data: {roles: [Role.Admin]}},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
  {canActivate: [AuthGuard], path: 'saverecipe', component: RecipeFormComponent},
  {canActivate: [AuthGuard], path: 'ingredientsMeasurment', component: IngredientsMeasurmentListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveingredientsMeasurment', component: IngredientsMesurementFormComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'viewrecipe', component: RecipeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
