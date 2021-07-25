import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {

count = 0;
isLoading = true;
  constructor( private api:ApiCallService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(products =>{
      // console.log(products);
      this.count = products.legnth;
      this.isLoading = false;  
    })
  }

}
