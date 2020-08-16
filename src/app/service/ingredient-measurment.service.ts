import {Injectable} from '@angular/core';
import {SecureHttpClientService} from './secure-http-client.service';
import {Observable} from 'rxjs';
import {IngredientMeasurement} from '../model/ingredientMeasurement';


@Injectable()
export class IngredientMeasurementService {

  private ingredientsMeasurmentUrlGet: string;
  private ingredientsMeasurmentUrlPost: string;

  constructor(private secureHttpClientService: SecureHttpClientService) {
    this.ingredientsMeasurmentUrlGet = 'http://localhost:8085/ingredient-measurement-units';
    this.ingredientsMeasurmentUrlPost = 'http://localhost:8085/ingredient-measurement-unit';
  }

  public findAll(): Observable<IngredientMeasurement[]> {
    return this.secureHttpClientService.get(this.ingredientsMeasurmentUrlGet);
  }

  public save(ingredientMeasurement: IngredientMeasurement) {
    return this.secureHttpClientService.post(this.ingredientsMeasurmentUrlPost, ingredientMeasurement);
  }
}
