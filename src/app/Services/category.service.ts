import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  userId= this.authservice.getuserId()
  URL='http://localhost:3000'
    _getcategory =
    '${this.URL}/bachatbazzar/categoree/getcategory';

    _addcategory =
    `${this.URL}/bachatbazzar/categoree/category/${this.userId}`;

    _getcategorybyid =
    `${this.URL}/bachatbazzar/categoree/category/${this.userId}`;

    _updatecategory =
    `${this.URL}/bachatbazzar/categoree/updatecategory/${this.userId}`;

    _delcategory =
    `${this.URL}/bachatbazzar/categoree/delcategory/${this.userId}`;

    constructor( private http: HttpClient, private authservice:LoginService ) { }


    addcategory(category: any,catId: any): Observable<any> {

      return this.http.post<any>(`${this._addcategory}/${catId}`, category);

    }


    getcategory(): Observable<any> {

      return this.http.get<any>(this._getcategory);

    }


    getproductbyid(): Observable<any> {

      return this.http.get<any>(this._getcategorybyid);

    }


    updateproductbyid(category: any,catId: any): Observable<any> {

      return this.http.put<any>(`${this._updatecategory}/${catId}`, category);

    }


    deleteproduct(catId: any): Observable<any> {

      return this.http.delete<any>(`${this._delcategory}/${catId}`);

    }

}
