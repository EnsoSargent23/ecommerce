import { Component } from '@angular/core';
import { Artikel } from '../TemplateData';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-warenkorb-artikel',
  standalone: true,
  imports: [],
  templateUrl: './warenkorb-artikel.component.html',
  styleUrl: './warenkorb-artikel.component.css'
})
export class WarenkorbArtikelComponent {
  @Input() artikel!: Artikel; // Eingabeparameter für den Artikel

  anzahl: number = 15;

  // Methoden zum Handhaben der Ereignisse
  addiert(){
    this.anzahl = this.anzahl+1;
  }

  enfernt(){
    if(this.anzahl >1){
    this.anzahl = this.anzahl-1;
    }
  }
}
