import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-registrierung-formular',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
  ],
  templateUrl: './registrierung-formular.component.html',
  styleUrls: ['./registrierung-formular.component.css']
})
export class RegistrierungFormularComponent {


  // Deklarationen für das Registrierungsformular
  name!: string;
  email!: string;
  passwort!: string;
  confirmPasswort!: string;
  phoneNumber!: string;
  address!: string;
  securityQuestion!: string;
  agreement!: boolean;
  newsletter!: boolean;
  paymentOption!: string;
  bankName!: string;
  bankBranch!: string;
  iban!: string;
  bic!: string;
  kartennummer!: string;
  gueltigkeitsdatum!: string;

  constructor() {}


  registrierung(){
    console.log("Registrirung !");
  }


}

