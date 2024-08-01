import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.css'
})
export class KontaktComponent {

  vorname: string = '';
    nachname: string = '';
    email: string = '';
    nachricht: string = '';

    sendenFormular() {
        console.log('Formular gesendet:', this.vorname, this.nachname, this.email, this.nachricht);
        // Hier könntest du die Logik für das Absenden des Formulars implementieren
    }
}
