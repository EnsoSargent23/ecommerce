import { Component, Input } from '@angular/core';
import { Artikel } from '../TemplateData';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-artikel-kasten',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './artikel-kasten.component.html',
  styleUrl: './artikel-kasten.component.css'
})
export class ArtikelKastenComponent {
  @Input() artikel!: Artikel;

  inWarenkorb(){
    
  }
}
