import { Component } from '@angular/core';
import { CallService } from './call.service';

@Component({
  selector: 'app-bank-component',
  templateUrl: './bank.component.html',
  styleUrls: ['./app.component.css']
})
export class BankComponent {
  title = 'Bank Account Information';

  constructor( private callservices: CallService) {}

  register(savings_account_number: string, routing_number: string ) {

      this.callservices.sendBankInformation(savings_account_number, routing_number)
        .subscribe(res => {
          console.log(res);
        });
  }
}
