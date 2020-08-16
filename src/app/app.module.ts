import {RecipeService} from './service/recipe.service';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserService} from './service/user.service';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';
import {IngredientFormComponent} from './ingredient-form/ingredient-form.component';
import {UomListComponent} from './uom-list/uom-list.component';
import {UomFormComponent} from './uom-form/uom-form.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthService} from './service/auth.service';
import {SecureHttpClientService} from './service/secure-http-client.service';
import {IngredientsMeasurementListComponent} from './ingredients-measurement-list/ingredients-measurement-list.component';
import {IngredientMeasurementFormComponent} from './ingredients-measurement-form/ingredient-measurement-form.component';
import {RecipeViewComponent} from './recipe-view/recipe-view.component';
import {IngredientMeasurementService} from './service/ingredient-measurment.service';
import {NaviComponent} from './navi/navi.component';
import {RecipeListComponent} from './recipes-list/recipes-list.component';
import {RecipeView} from './model/recipe-view';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    IngredientListComponent,
    IngredientFormComponent,
    UomListComponent,
    UomFormComponent,
    NaviComponent,
    LoginComponent,
    RegisterComponent,
    RecipeFormComponent,
    IngredientMeasurementFormComponent,
    IngredientsMeasurementListComponent,
    RecipeViewComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthService, SecureHttpClientService, RecipeService, IngredientMeasurementService, RecipeView],
  bootstrap: [AppComponent]
})
export class AppModule {
}
