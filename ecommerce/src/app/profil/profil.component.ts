import { Component } from '@angular/core';
import { ProfilInfoComponent } from '../profil-info/profil-info.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { users } from '../User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    HeaderComponent,
    ProfilInfoComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  userList = users;

}
