import { RecipeService } from './service/recipe-service.service';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NaviComponent } from './navi/navi.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './service/user-service.service';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { UomListComponent } from './uom-list/uom-list.component';
import { UomFormComponent } from './uom-form/uom-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth-service.service';
import {SecureHttpClientService} from './service/secure-http-client.service';
import {IngredientsMeasurmentListComponent} from './ingredients-measurment-list/ingredients-measurment-list.component';
import {IngredientsMesurementFormComponent} from './ingredients-mesurement-form/ingredients-mesurement-form.component';

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
    RecipeComponent,
    RecipeFormComponent,
    IngredientsMeasurmentListComponent,
    IngredientsMesurementFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthService, SecureHttpClientService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
