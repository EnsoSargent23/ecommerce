import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../User';

@Component({
  selector: 'app-profil-info',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profil-info.component.html',
  styleUrl: './profil-info.component.css'
})
export class ProfilInfoComponent {
  @Input() user!: User;
}
