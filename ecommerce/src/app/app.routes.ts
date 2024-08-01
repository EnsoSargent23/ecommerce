import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SucheComponent } from './suche/suche.component';
import { AlleArtikelComponent } from './alle-artikel/alle-artikel.component';
import { LoginComponent } from './login/login.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { ProfilComponent } from './profil/profil.component';
import { RechnungenComponent } from './rechnungen/rechnungen.component';
import { BestellungenComponent } from './bestellungen/bestellungen.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { InfoComponent } from './info/info.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'suche', component: SucheComponent},
  { path: 'all', component: AlleArtikelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrierung', component: RegistrierungComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'rechnungen', component: RechnungenComponent },
  { path: 'bestellungen', component: BestellungenComponent },
  { path: 'warenkorb', component: WarenkorbComponent },
  { path: 'info', component: InfoComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  //{ path: '**', component: ErrorComponent}
];
