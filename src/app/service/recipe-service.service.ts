import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Recipe } from '../model/recipe';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeService {
  private recipesUrlGet: string;
  private recipeUrlPost: string;
  private recipesUrlByIdGet: string;

  constructor(private http: HttpClient) {
    this.recipesUrlGet = 'http://localhost:8085/recipes';
    this.recipeUrlPost = 'http://localhost:8085/recipe';
    this.recipesUrlByIdGet = 'http://localhost:8085/user/1/recipes';
  }

  public findAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrlGet);
  }

  public save(recipe: Recipe) {
    return this.http.post<Recipe>(this.recipeUrlPost, recipe);
  }

  public findByUserId() {
    return this.http.get<Recipe[]>(this.recipesUrlByIdGet);
  }

}
