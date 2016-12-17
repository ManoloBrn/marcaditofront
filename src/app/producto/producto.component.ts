import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
    .subscribe();
  }



}
