import { Ingredient } from '../model/ingredient';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrlGet: string;
  private ingredientUrlPost: string;

  constructor(private http: SecureHttpClientService) {
    this.ingredientsUrlGet = environment.apiUrl + '/ingredients';
    this.ingredientUrlPost = environment.apiUrl + '/ingredient';
  }

  public findAll(): Observable<Ingredient[]> {
    return this.http.get(this.ingredientsUrlGet);
  }

  public save(ingredient: Ingredient) {
    return this.http.post(this.ingredientUrlPost, ingredient);
  }
}
