import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

constructor(private http: Http){}

    getData(){
        return this.http.get('http://127.0.0.1:8000/api/v1/productos/list/')
        .map((response: Response) => response.json())

    }


}
