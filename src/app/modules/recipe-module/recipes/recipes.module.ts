import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipesRoutingModule} from './recipes-routing.module';
import {IngredientListComponent} from './components/ingredient-components/ingredient-list/ingredient-list.component';
import {IngredientFormComponent} from './components/ingredient-components/ingredient-form/ingredient-form.component';
import {UomListComponent} from './components/uom-components/uom-list/uom-list.component';
import {UomFormComponent} from './components/uom-components/uom-form/uom-form.component';
import {RecipeFormComponent} from './components/recipe-components/recipe-form/recipe-form.component';
import {IngredientMeasurementFormComponent} from './components/ingredient-measurement-components/ingredients-measurement-form/ingredient-measurement-form.component';
import {IngredientsMeasurementListComponent} from './components/ingredient-measurement-components/ingredients-measurement-list/ingredients-measurement-list.component';
import {RecipeViewComponent} from './components/recipe-components/recipe-view/recipe-view.component';
import {RecipeListComponent} from './components/recipe-components/recipes-list/recipes-list.component';
import {MyRecipeListComponent} from './components/recipe-components/my-recipe-list/my-recipe-list.component';
import {UserRecipesComponent} from './components/recipe-components/user-recipes/user-recipes.component';
import {SharedModule} from '../../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    IngredientListComponent,
    IngredientFormComponent,
    UomListComponent,
    UomFormComponent,
    RecipeFormComponent,
    IngredientMeasurementFormComponent,
    IngredientsMeasurementListComponent,
    RecipeViewComponent,
    RecipeListComponent,
    MyRecipeListComponent,
    UserRecipesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule {
}
