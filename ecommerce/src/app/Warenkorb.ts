import { Artikel } from "./TemplateData";

export class Warenkorb {
  artikelListe: Artikel[];
  käuferId: number;
  käuferEmail: string;
  

  constructor(käuferId: number, käuferEmail: string) {
    this.artikelListe = [];
    this.käuferId = käuferId;
    this.käuferEmail = käuferEmail;
   
  }

  artikelHinzufügen(artikel: Artikel) {
    this.artikelListe.push(artikel);
  }

  artikelEntfernen(artikel: Artikel) {
    const index = this.artikelListe.indexOf(artikel);
    if (index !== -1) {
      this.artikelListe.splice(index, 1);
    }
  }

  gesamtPreis(): number {
    return this.artikelListe.reduce((total, artikel) => total + artikel.preis, 0);
  }
}

export const warenkorb = new Warenkorb(1,"test@test.de");
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel1.jpg","1 Artikel","Artikelbeschreibung ist ein wichtiger Aspekt im Einzelhandel, E-Commerce und Omnichannel-Geschäft, der sich auf die detaillierte Darstellung der Eigenschaften, Funktionen und Merkmale eines bestimmten Produkts oder einer bestimmten Dienstleistung bezieht. Diese Beschreibungen sind sowohl für physische Einzelhandelsgeschäfte als auch für Online-Shops von entscheidender Bedeutung, da sie den Kunden dabei helfen, fundierte Kaufentscheidungen zu treffen. Eine gut verfasste Artikelbeschreibung kann den Umsatz ankurbeln, während eine schlechte Beschreibung potenzielle Kunden abschrecken kann.",13.99));
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel1.jpg","2 Artikel","Artikelbeschreibung ist ein wichtiger Aspekt im Einzelhandel, E-Commerce und Omnichannel-Geschäft, der sich auf die detaillierte Darstellung der Eigenschaften, Funktionen und Merkmale eines bestimmten Produkts oder einer bestimmten Dienstleistung bezieht. Diese Beschreibungen sind sowohl für physische Einzelhandelsgeschäfte als auch für Online-Shops von entscheidender Bedeutung, da sie den Kunden dabei helfen, fundierte Kaufentscheidungen zu treffen. Eine gut verfasste Artikelbeschreibung kann den Umsatz ankurbeln, während eine schlechte Beschreibung potenzielle Kunden abschrecken kann.",23.99));
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel2.jpg","3 Artikel","Artikelbeschreibung ist ein wichtiger Aspekt im Einzelhandel, E-Commerce und Omnichannel-Geschäft, der sich auf die detaillierte Darstellung der Eigenschaften, Funktionen und Merkmale eines bestimmten Produkts oder einer bestimmten Dienstleistung bezieht. Diese Beschreibungen sind sowohl für physische Einzelhandelsgeschäfte als auch für Online-Shops von entscheidender Bedeutung, da sie den Kunden dabei helfen, fundierte Kaufentscheidungen zu treffen. Eine gut verfasste Artikelbeschreibung kann den Umsatz ankurbeln, während eine schlechte Beschreibung potenzielle Kunden abschrecken kann.",14.99));
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel1.jpg","4 Artikel","Artikelbeschreibung ist ein wichtiger Aspekt im Einzelhandel, E-Commerce und Omnichannel-Geschäft, der sich auf die detaillierte Darstellung der Eigenschaften, Funktionen und Merkmale eines bestimmten Produkts oder einer bestimmten Dienstleistung bezieht. Diese Beschreibungen sind sowohl für physische Einzelhandelsgeschäfte als auch für Online-Shops von entscheidender Bedeutung, da sie den Kunden dabei helfen, fundierte Kaufentscheidungen zu treffen. Eine gut verfasste Artikelbeschreibung kann den Umsatz ankurbeln, während eine schlechte Beschreibung potenzielle Kunden abschrecken kann.",135.99));
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel2.jpg","5 Artikel","Artikelbeschreibung ist ein wichtiger Aspekt im Einzelhandel, E-Commerce und Omnichannel-Geschäft, der sich auf die detaillierte Darstellung der Eigenschaften, Funktionen und Merkmale eines bestimmten Produkts oder einer bestimmten Dienstleistung bezieht. Diese Beschreibungen sind sowohl für physische Einzelhandelsgeschäfte als auch für Online-Shops von entscheidender Bedeutung, da sie den Kunden dabei helfen, fundierte Kaufentscheidungen zu treffen. Eine gut verfasste Artikelbeschreibung kann den Umsatz ankurbeln, während eine schlechte Beschreibung potenzielle Kunden abschrecken kann.",11.99));
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel1.jpg","6 Artikel","Test Beschreibung",3.99));
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel2.jpg","7 Artikel","Test Beschreibung",122.99));
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel1.jpg","8 Artikel","Test Beschreibung",3.99));
warenkorb.artikelHinzufügen(new Artikel("./assets/artikel2.jpg","9 Artikel","Test Beschreibung",53.99));