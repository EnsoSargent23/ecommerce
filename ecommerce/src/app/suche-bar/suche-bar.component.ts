import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suche-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './suche-bar.component.html',
  styleUrl: './suche-bar.component.css'
})
export class SucheBarComponent {
  suchbegriff: string = '';

  suche() {
    console.log('Suche ausführen mit Suchbegriff:', this.suchbegriff);
    // Hier kannst du die gewünschte Aktion für die Suche ausführen
  }
}
