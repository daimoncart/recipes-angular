import { UomService } from '../../../../../../service/uom.service';
import { Component, OnInit } from '@angular/core';
import { Uom } from '../../../../../../model/uom';

@Component({
  selector: 'app-uom-list',
  templateUrl: './uom-list.component.html',
  styleUrls: ['./uom-list.component.css']
})
export class UomListComponent implements OnInit {
  uoms: Uom[];

  constructor( private uomService: UomService) {}

  ngOnInit() {
    this.uomService.findAll().subscribe(data => {
      this.uoms = data;
    });
  }

}
