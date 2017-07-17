import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CallService {
  private base_url= 'http://tourup-backend.appspot.com/';
  private headers = new Headers ({'Content-Type': 'application/json; charset=utf-8',
   'key': 'AIzaSyA3BFwjLE2LjGjMKIjQ4uZoDiQgD4zq83M'});

  constructor(private http: Http) {}

  register(full_name: string, phone_number: string, email: string, password: string) {
    const headers = this.headers;
    const callUrl = this.base_url + 'register';
    console.log(callUrl);
    const body = {
      'full_name': full_name,
      'email': email,
      'password': password,
      'phone_number':  phone_number,
      'is_tourist':  'null',
      'is_tourguide':  'true'
    };
    return this.http.post(callUrl, body, {headers});
  }

  sendAddressDOBssn(date_of_birth: string, ssn: string, address_line1: string,
     address_line2: string, city: string, zip_code: string, state: string, country: string) {
    const headers = this.headers;
    const callUrl = this.base_url + 'address';   // Check on link extension
    const body = {  // Check body paramenters
      'date_of_birth': date_of_birth,
      'ssn': ssn,
      'address_line1': address_line1,
      'address_line2':  address_line2,
      'city': city,
      'zip_code': zip_code,
      'state': state,
      'country': country
    };
    return this.http.post(callUrl, body, {headers});
  }

  sendBankInformation(savings_account_number: string, routing_number: string) {
    const headers = this.headers;
    const callUrl = this.base_url + 'register/';   // Check on link extension
    const body = {  // Check body paramenters
      'savings_account_number': savings_account_number,
      'routing_number': routing_number
    };
    return this.http.post(callUrl, body, {headers});
  }
}
