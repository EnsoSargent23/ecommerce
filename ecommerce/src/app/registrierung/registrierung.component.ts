import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RegistrierungFormularComponent } from '../registrierung-formular/registrierung-formular.component';

@Component({
  selector: 'app-registrierung',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RegistrierungFormularComponent
  ],
  templateUrl: './registrierung.component.html',
  styleUrl: './registrierung.component.css'
})
export class RegistrierungComponent {

}
