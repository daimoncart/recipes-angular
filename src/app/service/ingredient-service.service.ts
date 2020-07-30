import { Ingredient } from './../model/ingredient';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrlGet: string;
  private ingredientUrlPost: string;

  constructor(private http: HttpClient) {
    this.ingredientsUrlGet = 'http://localhost:8085/ingredients';
    this.ingredientUrlPost = 'http://localhost:8085/ingredient';
  }

  public findAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientsUrlGet);
  }

  public save(ingredient: Ingredient) {
    return this.http.post<Ingredient>(this.ingredientUrlPost, ingredient);
  }
}
