import { Uom } from '../model/uom';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  private uomsUrlGet: string;
  private uomUrlPost: string;

  constructor(private http: SecureHttpClientService) {
    this.uomsUrlGet = 'http://localhost:8085/measurement-units';
    this.uomUrlPost = 'http://localhost:8085/measurement-unit';
  }

  public findAll(): Observable<Uom[]> {
    return this.http.get(this.uomsUrlGet);
  }

  public save(uom: Uom) {
    return this.http.post(this.uomUrlPost, uom);
  }
}
