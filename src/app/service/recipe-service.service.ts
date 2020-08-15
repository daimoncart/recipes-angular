import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesUrlGet: string;
  private recipeUrlPost: string;
  private recipesUrlByIdGet: string;

  constructor(private http: SecureHttpClientService) {
    this.recipesUrlGet = 'http://localhost:8085/recipes';
    this.recipeUrlPost = 'http://localhost:8085/recipe';
    this.recipesUrlByIdGet = 'http://localhost:8085/user/1/recipes';
  }

  public findAll(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrlGet);
  }

  public save(recipe: Recipe) {
    return this.http.post(this.recipeUrlPost, recipe);
  }

  public findByUserId() {
    return this.http.get(this.recipesUrlByIdGet);
  }

}
