import { Component } from '@angular/core';
import { warenkorb } from '../Warenkorb';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { WarenkorbArtikelComponent } from '../warenkorb-artikel/warenkorb-artikel.component';

@Component({
  selector: 'app-warenkorb',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    WarenkorbArtikelComponent,
    CommonModule
  ],
  templateUrl: './warenkorb.component.html',
  styleUrl: './warenkorb.component.css'
})
export class WarenkorbComponent {
  warenkorb = warenkorb.artikelListe;

  summe = warenkorb.gesamtPreis();

}
