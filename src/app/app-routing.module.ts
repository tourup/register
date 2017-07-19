import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { AddressComponent } from './address.component';
import { BankComponent } from './bank.component';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '',  component: RegisterComponent },
  { path: 'address', component: AddressComponent },
  { path: 'address/bank', component: BankComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
