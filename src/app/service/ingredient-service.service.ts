import { Ingredient } from '../model/ingredient';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrlGet: string;
  private ingredientUrlPost: string;

  constructor(private http: SecureHttpClientService) {
    this.ingredientsUrlGet = 'http://localhost:8085/ingredients';
    this.ingredientUrlPost = 'http://localhost:8085/ingredient';
  }

  public findAll(): Observable<Ingredient[]> {
    return this.http.get(this.ingredientsUrlGet);
  }

  public save(ingredient: Ingredient) {
    return this.http.post(this.ingredientUrlPost, ingredient);
  }
}
