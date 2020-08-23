import { Uom } from '../model/uom';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  private uomsUrlGet: string;
  private uomUrlPost: string;

  constructor(private http: SecureHttpClientService) {
    this.uomsUrlGet = environment.apiUrl + '/measurement-units';
    this.uomUrlPost = environment.apiUrl + '/measurement-unit';
  }

  public findAll(): Observable<Uom[]> {
    return this.http.get(this.uomsUrlGet);
  }

  public save(uom: Uom) {
    return this.http.post(this.uomUrlPost, uom);
  }
}
