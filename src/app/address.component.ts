import { Component } from '@angular/core';
import { CallService } from './call.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-address-component',
  templateUrl: './address.component.html',
  styleUrls: ['./app.component.css']
})
export class AddressComponent {
  title = 'Some more information';
  constructor(
    private callservices: CallService,
    private location: Location) {}

  addInformation(day: string, month: string, year: string, ssn: string,
    address_line1: string, address_line2: string, city: string,
    zip_code: string, state: string, country: string) {

      const date_of_birth = month + '/' + day + '/' + year;
      this.callservices.sendAddressDOBssn(date_of_birth, ssn, address_line1,
      address_line2, city, zip_code, state, country)
        .subscribe(res => {
          console.log(res);
        });
  }
  goBack(): void {
    this.location.back();
  }
}
