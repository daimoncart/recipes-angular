import {Injectable} from '@angular/core';
import {SecureHttpClientService} from './secure-http-client.service';
import {Observable} from 'rxjs';
import {IngredientMeasurement} from '../model/ingredientMeasurement';


@Injectable({providedIn: 'root'})
export class IngredientMeasurementServiceService {

  private ingredientsMeasurementUrlGet: string;
  private ingredientsMeasurementUrlPost: string;

  constructor(private http: SecureHttpClientService) {
    this.ingredientsMeasurementUrlGet = 'http://localhost:8085/ingredient-measurement-units';
    this.ingredientsMeasurementUrlPost = 'http://localhost:8085/ingredients-mesurments';
  }

  public findAll(): Observable<IngredientMeasurement[]> {
    return this.http.get(this.ingredientsMeasurementUrlGet);
  }

  public save(ingredientMeasurement: IngredientMeasurement) {
    return this.http.post(this.ingredientsMeasurementUrlPost, IngredientMeasurement);
  }
}
