import { Injectable } from '@angular/core';
import { RecipeTO } from '../model/recipe-to';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';
import { Recipe } from '../model/recipe';
import {RecipeView} from '../model/recipe-view';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly url = 'http://localhost:8085/';
  constructor(private http: SecureHttpClientService, private https: HttpClient) {

  }

  public findAll(): Observable<RecipeView[]> {
    const recipeUrl = this.url + 'recipes/ingredients';
    return this.https.get<RecipeView[]>(recipeUrl);
  }

  public save(recipe: RecipeTO) {
    const recipeUrl = this.url + 'recipe';
    return this.http.post(recipeUrl, recipe);
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
