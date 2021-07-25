import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  addModalRef: BsModalRef;
  nameFormControl: FormControl = new FormControl();
  priceFormControl: FormControl = new FormControl();

  constructor(private modalService: BsModalService, private apiCall: ApiCallService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.addModalRef = this.modalService.show(template);
  }

  addNmewIte(): void {
    
    let obj = {
      name : this.nameFormControl.value,
      price : this.priceFormControl.value
    }
    this.apiCall.postProduct(obj).subscribe( response => {
      console.log("apicallljhggjd");
      this.addModalRef.hide();
    })
  }



}
