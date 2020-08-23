import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found-component/not-found-component.component';
import {RecipeService} from './service/recipe.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserService} from './service/user.service';
import {AuthService} from './service/auth.service';
import {SecureHttpClientService} from './service/secure-http-client.service';
import {IngredientMeasurementService} from './service/ingredient-measurment.service';
import {NaviComponent} from './navi/navi.component';
import {RecipeView} from './model/recipe-view';
import {AuthorizationModule} from './modules/authorization/authorization.module';
import {UsersModule} from './modules/user-module/users/users.module';
import {RecipesModule} from './modules/recipe-module/recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthorizationModule,
    UsersModule,
    RecipesModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthService, SecureHttpClientService, RecipeService, IngredientMeasurementService, RecipeView],
  bootstrap: [AppComponent]
})
export class AppModule {
}
