import { Uom } from './../model/uom';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  private uomsUrlGet: string;
  private uomUrlPost: string;

  constructor(private http: HttpClient) {
    this.uomsUrlGet = 'http://localhost:8085/measurement-units';
    this.uomUrlPost = 'http://localhost:8085/measurement-unit';
  }

  public findAll(): Observable<Uom[]> {
    return this.http.get<Uom[]>(this.uomsUrlGet);
  }

  public save(uom: Uom) {
    return this.http.post<Uom>(this.uomUrlPost, uom);
  }
}
