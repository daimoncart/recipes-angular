import { Injectable } from '@angular/core';
import { RecipeTO } from '../model/recipe-to';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesUrlGet: string;
  private recipeUrlPost: string;
  private recipesUrlByIdGet: string;
  private recipeById: string;

  private readonly url = 'http://localhost:8085';

  constructor(private http: SecureHttpClientService) {
    this.recipesUrlGet = 'http://localhost:8085/recipes';
    this.recipeUrlPost = 'http://localhost:8085/recipe';
    this.recipesUrlByIdGet = 'http://localhost:8085/user/1/recipes';
    this.recipeById = 'http://localhost:8085/recipe/1';
  }

  public findAll(): Observable<RecipeTO[]> {
    return this.http.get(this.recipesUrlGet);
  }

  public save(recipe: RecipeTO) {
    return this.http.post(this.recipeUrlPost, recipe);
  }

  public findByUserId() {
    return this.http.get(this.recipesUrlByIdGet);
  }

  public getRecipeById(id: number): Observable<Recipe> {
    const recipeUrl = this.url + '/recipe/' + id;
    return this.http.get(recipeUrl);
  }

}
