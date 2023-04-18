import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  userId = this.authservice.getuserId();
  URL='http://localhost:3000'
_postContactus =`${this.URL}/bachatbazzar/contact/users/${this.userId}/postcontact`
constructor(private http: HttpClient, private authservice: LoginService) {}

postcontact(data:any){
  return this.http.post<any>(this._postContactus, data);

}
}
