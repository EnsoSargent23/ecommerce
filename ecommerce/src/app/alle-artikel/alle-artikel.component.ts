import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ArtikelKastenComponent } from '../artikel-kasten/artikel-kasten.component';
import { artikel ,Artikel } from '../TemplateData';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-alle-artikel',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    NgFor,
    ArtikelKastenComponent,
  ],
  templateUrl: './alle-artikel.component.html',
  styleUrl: './alle-artikel.component.css'
})
export class AlleArtikelComponent {
  artikelListe: Artikel[] = artikel; 
}
