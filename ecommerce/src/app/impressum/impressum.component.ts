import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css'
})
export class ImpressumComponent {

}
