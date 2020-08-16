import { Injectable } from '@angular/core';
import { RecipeTO } from '../model/recipe-to';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';
import { Recipe } from '../model/recipe';
import {RecipeView} from '../model/recipe-view';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly url = 'http://localhost:8085/';
  constructor(private http: SecureHttpClientService) {

  }

  public findAll(): Observable<RecipeView[]> {
    const recipeUrl = this.url + 'recipes/ingredients';
    return this.http.get(recipeUrl);
  }

  public save(recipe: RecipeTO) {
    const recipeUrl = this.url + 'recipe';
    return this.http.post(recipeUrl, recipe);
  }

  public findMyRecipes(): Observable<Recipe[]> {
    const recipeUrl = this.url + 'my-recipes';
    return this.http.get(recipeUrl);
  }

  public findByUserName(name: string) {
    const recipeUrl = this.url + name + '/recipes';
    return this.http.get(recipeUrl);
  }

  public getRecipeById(id: number): Observable<Recipe> {
    const recipeUrl = this.url + 'recipe/' + id;
    return this.http.get(recipeUrl);
  }

}
