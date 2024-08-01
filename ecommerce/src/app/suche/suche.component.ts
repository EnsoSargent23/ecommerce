import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SucheBarComponent } from '../suche-bar/suche-bar.component';

@Component({
  selector: 'app-suche',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SucheBarComponent
  ],
  templateUrl: './suche.component.html',
  styleUrl: './suche.component.css'
})
export class SucheComponent {

}
