import { UomService } from '../service/uom.service';
import { Component, OnInit } from '@angular/core';
import {Uom} from './../model/uom';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uom-form',
  templateUrl: './uom-form.component.html',
  styleUrls: ['./uom-form.component.css']
})
export class UomFormComponent {
  uom: Uom;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private uomService: UomService
  ) {
    this.uom = new Uom();
  }

  onSubmit() {
    this.uomService.save(this.uom).subscribe(result => this.gotoUomList());
  }

  gotoUomList() {
    this.router.navigate(['/uoms']);
  }


}
