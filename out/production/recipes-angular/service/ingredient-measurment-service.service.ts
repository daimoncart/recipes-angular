import {Injectable} from '@angular/core';
import {SecureHttpClientService} from './secure-http-client.service';
import {Observable} from 'rxjs';
import {IngredientMeasurment} from '../model/ingredientMeasurment';


@Injectable({providedIn: 'root'})
export class IngredientMeasurmentServiceService {

  private ingredientsMeasurmentUrlGet: string;
  private ingredientsMeasurmentUrlPost: string;

  constructor(private http: SecureHttpClientService) {
    this.ingredientsMeasurmentUrlGet = 'http://localhost:8085/ingredient-mesurment';
    this.ingredientsMeasurmentUrlPost = 'http://localhost:8085/ingredients-mesurments';
  }

  public findAll(): Observable<IngredientMeasurment[]> {
    return this.http.get(this.ingredientsMeasurmentUrlGet);
  }

  public save(ingredientMeasurment: IngredientMeasurment) {
    return this.http.post(this.ingredientsMeasurmentUrlPost, IngredientMeasurment);
  }
}
