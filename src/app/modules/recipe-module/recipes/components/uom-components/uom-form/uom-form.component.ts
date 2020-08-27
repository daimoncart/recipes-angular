import { FormGroup, FormControlName, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UomService } from '../../../../../../service/uom.service';
import { Component, OnInit } from '@angular/core';
import {Uom} from '../../../../../../model/uom';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uom-form',
  templateUrl: './uom-form.component.html',
  styleUrls: ['./uom-form.component.css']
})
export class UomFormComponent {
  uom: Uom = new Uom();
  uomForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private uomService: UomService,
    private formBuilder: FormBuilder
  ) {
    this.uomForm = formBuilder.group({
      unit: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  onSubmit() {
    this.uom.name = this.uomForm.value.unit;
    this.uomService.save(this.uom).subscribe(result => this.gotoUomList());
  }

  gotoUomList() {
    this.router.navigate(['/uoms']);
  }


}
