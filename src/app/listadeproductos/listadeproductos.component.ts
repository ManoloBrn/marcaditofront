import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-listadeproductos',
  templateUrl: './listadeproductos.component.html',
  styleUrls: ['./listadeproductos.component.css']
})
export class ListadeproductosComponent implements OnInit {

  items: any[] = [];


  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
    .subscribe(
      data => {
        const myArray = [];
        for (let key in data){
          myArray.push(data[key]);
        }
        this.items = myArray;
      }
    );
  }


}
