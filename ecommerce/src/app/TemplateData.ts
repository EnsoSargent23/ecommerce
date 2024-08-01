// TemplateData.ts

export class Artikel {
    constructor(
      public bild: string,
      public name: string,
      public beschreibung: string,
      public preis: number
    ) {}
  }
  
export const artikel: Artikel[] = [
    new Artikel('./assets/artikel1.jpg', 'Artikel 1', 'Beschreibung für Artikel 1', 19.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 2', 'Beschreibung für Artikel 2', 29.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 3', 'Beschreibung für Artikel 3', 39.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 4', 'Beschreibung für Artikel 4', 19.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 5', 'Beschreibung für Artikel 5', 29.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 6', 'Beschreibung für Artikel 6', 39.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 7', 'Beschreibung für Artikel 7', 19.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 8', 'Beschreibung für Artikel 8', 29.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 9', 'Beschreibung für Artikel 9', 39.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 10', 'Beschreibung für Artikel 10', 19.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 11', 'Beschreibung für Artikel 11', 29.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 12', 'Beschreibung für Artikel 12', 39.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 13', 'Beschreibung für Artikel 13', 19.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 14', 'Beschreibung für Artikel 14', 29.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 15', 'Beschreibung für Artikel 15', 39.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 16', 'Beschreibung für Artikel 16', 19.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 17', 'Beschreibung für Artikel 17', 29.99),
    new Artikel('./assets/artikel1.jpg', 'Artikel 18', 'Beschreibung für Artikel 18', 39.99)
    ];
  