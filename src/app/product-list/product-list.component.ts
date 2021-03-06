import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiCallService } from '../api-call.service';

 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent implements OnInit {
  
  addModalRef: BsModalRef;
  editModalRef: BsModalRef;
  nameFormControl: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^(?![0-9]*$)[a-zA-Z0-9]+$/)]);
  priceFormControl: FormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  items: any[] = [];
  id = '';

  constructor(private modalService: BsModalService, private apiCall: ApiCallService) { }

  ngOnInit(): void {
    this.getItems();
  }

  openModal(template: TemplateRef<any>) {
    this.addModalRef = this.modalService.show(template);
    this.nameFormControl.setValue('');
    this.priceFormControl.setValue('');
  }

  openEditModal(template:TemplateRef<any>, item: any ) {
    this.editModalRef = this.modalService.show(template);
    this.nameFormControl.setValue(item.name);
    this.priceFormControl.setValue(item.price);
    this.id = item._id;
  }

  addNewItem(): void {
    
    let obj = {
      name : this.nameFormControl.value,
      price : this.priceFormControl.value
    }
    this.nameFormControl.markAsTouched();
    this.priceFormControl.markAsTouched();
    if (this.nameFormControl.valid && this.priceFormControl.valid) {
      this.apiCall.postProduct(obj).subscribe( response => {
        console.log("apicallljhggjd");
        this.addModalRef.hide();
        this.getItems();
      })
    }
    
  }

  getItems(): void {
    this.apiCall.getProduct().subscribe( response => {
      this.items = response;
      console.log(response);
    })
  }

  deleteItem(id: string): void {
    this.apiCall.deleteProduct(id).subscribe( response => {
      console.log("deleted");
      this.getItems();
    })
  }

  editItem(): void {
    let obj = {
      name: this.nameFormControl.value,
      price: this.priceFormControl.value
    };

    this.nameFormControl.markAsTouched();
    this.priceFormControl.markAsTouched();
    if(this.nameFormControl.valid && this.priceFormControl.valid) {
      this.apiCall.updateProduct(obj, this.id).subscribe( response => {

        console.log("updated");
        this.editModalRef.hide();
        this.getItems();
      })
    }
    
  }


}
