import { UomFormComponent } from './uom-form/uom-form.component';
import { UomListComponent } from './uom-list/uom-list.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'saveuser', component: UserFormComponent },
  { path: 'ingredients', component: IngredientListComponent},
  { path: 'saveingredient', component: IngredientFormComponent},
  { path: 'uoms', component: UomListComponent},
  { path: 'saveuom', component: UomFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
