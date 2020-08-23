import { environment } from './../../environments/environment.prod';
import {Injectable} from '@angular/core';
import {SecureHttpClientService} from './secure-http-client.service';
import {Observable} from 'rxjs';
import {IngredientMeasurement} from '../model/ingredientMeasurement';


@Injectable()
export class IngredientMeasurementService {

  private ingredientsMeasurmentUrlGet: string;
  private ingredientsMeasurmentUrlPost: string;

  constructor(private secureHttpClientService: SecureHttpClientService) {
    this.ingredientsMeasurmentUrlGet = environment.apiUrl + '/ingredient-measurement-units';
    this.ingredientsMeasurmentUrlPost = environment.apiUrl + '/ingredient-measurement-unit';
  }

  public findAll(): Observable<IngredientMeasurement[]> {
    return this.secureHttpClientService.get(this.ingredientsMeasurmentUrlGet);
  }

  public save(ingredientMeasurement: IngredientMeasurement) {
    return this.secureHttpClientService.post(this.ingredientsMeasurmentUrlPost, ingredientMeasurement);
  }
}
