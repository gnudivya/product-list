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
  items: any[] = [];

  constructor(private modalService: BsModalService, private apiCall: ApiCallService) { }

  ngOnInit(): void {
    this.getItems();
  }

  openModal(template: TemplateRef<any>) {
    this.addModalRef = this.modalService.show(template);
  }

  addNewItem(): void {
    
    let obj = {
      name : this.nameFormControl.value,
      price : this.priceFormControl.value
    }
    this.apiCall.postProduct(obj).subscribe( response => {
      console.log("apicallljhggjd");
      this.addModalRef.hide();
      this.getItems();
    })
  }

  getItems(): void {
    this.apiCall.getProduct().subscribe( response => {
      this.items = response;
      console.log(response);
    })
  }

}
