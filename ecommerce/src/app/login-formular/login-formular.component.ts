import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-formular',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-formular.component.html',
  styleUrl: './login-formular.component.css'
})
export class LoginFormularComponent {

  benutzername: string = '';
  passwort: string = '';

  anmelden() {
    console.log('Anmelden mit Benutzername:', this.benutzername, 'und Passwort:', this.passwort);
    // Hier kannst du die gewünschte Aktion für die Anmeldung ausführen
  }
  registrierung(){
    console.log("Registrirung !");
  }
}
