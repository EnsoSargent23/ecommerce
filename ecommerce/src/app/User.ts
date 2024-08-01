
export class User {
    id: number;
    name: string;
    email: string;
    passwort: string;
    phoneNumber: string;
    address: string;
    securityQuestion: string;
    agreement: boolean;
    newsletter: boolean;
    paymentOption: string;
    bankName: string;
    bankBranch: string;
    iban: string;
    bic: string;
    kartennummer: string;
    gueltigkeitsdatum: string;
  
    constructor(
        id : number,
        name: string,
        email: string,
        passwort: string,
        phoneNumber: string,
        address: string,
        securityQuestion: string,
        agreement: boolean,
        newsletter: boolean,
        paymentOption: string,
        bankName: string,
        bankBranch: string,
        iban: string,
        bic: string,
        kartennummer: string,
        gueltigkeitsdatum: string
    ) {
        this.id= id;
        this.name = name;
        this.email = email;
        this.passwort = passwort;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.securityQuestion = securityQuestion;
        this.agreement = agreement;
        this.newsletter = newsletter;
        this.paymentOption = paymentOption;
        this.bankName = bankName;
        this.bankBranch = bankBranch;
        this.iban = iban;
        this.bic = bic;
        this.kartennummer = kartennummer;
        this.gueltigkeitsdatum = gueltigkeitsdatum;
    }
}

export const users = [
    {
      id: 1,
      name: "Max Mustermann",
      email: "max@example.com",
      passwort: "passwort123",

      phoneNumber: "123456789",
      address: "Musterstraße 123",
      securityQuestion: "Lieblingsfarbe",
      agreement: true,
      newsletter: true,
      paymentOption: "paypal",
      bankName: "Bank XYZ",
      bankBranch: "Filiale ABC",
      iban: "DE12345678901234567890",
      bic: "ABCDEF",
      kartennummer: "1234567890123456",
      gueltigkeitsdatum: "12/24"
    },
    {
      id: 2,
      name: "Anna Schmidt",
      email: "anna@example.com",
      passwort: "password456",
      phoneNumber: "987654321",
      address: "Beispielweg 456",
      securityQuestion: "Lieblingsessen",
      agreement: false,
      newsletter: false,
      paymentOption: "Kreditkarte",
      bankName: "Bank ABC",
      bankBranch: "Filiale XYZ",
      iban: "DE09876543210987654321",
      bic: "ZYXWVU",
      kartennummer: "6543210987654321",
      gueltigkeitsdatum: "08/25"
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@example.com",
      passwort: "password123",
      phoneNumber: "5551234567",
      address: "123 Hauptstraße",
      securityQuestion: "Lieblingsfilm",
      agreement: true,
      newsletter: false,
      paymentOption: "Kreditkarte",
      bankName: "Bank QWE",
      bankBranch: "Filiale XYZ",
      iban: "GB12QWE34567890123456",
      bic: "QWERPO",
      kartennummer: "9876543210987654",
      gueltigkeitsdatum: "09/26"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      passwort: "abc123",
      phoneNumber: "5559876543",
      address: "456 Elmstraße",
      securityQuestion: "Lieblingsessen",
      agreement: true,
      newsletter: true,
      paymentOption: "paypal",
      bankName: "Bank RST",
      bankBranch: "Filiale UVW",
      iban: "US12345678901234567890",
      bic: "UVWXYZ",
      kartennummer: "1230987654321098",
      gueltigkeitsdatum: "11/27"
    },
    {
      id: 5,
      name: "Emily Brown",
      email: "emily@example.com",
      passwort: "qwerty",
      phoneNumber: "5555555555",
      address: "789 Eichenstraße",
      securityQuestion: "Name des ersten Haustieres",
      agreement: false,
      newsletter: false,
      paymentOption: "Überweisung",
      bankName: "Bank LMN",
      bankBranch: "Filiale OPQ",
      iban: "FR12345678901234567890",
      bic: "LMNOPQ",
      kartennummer: "0987654321098765",
      gueltigkeitsdatum: "07/23"
    },
    {
      id: 6,
      name: "Michael Williams",
      email: "michael@example.com",
      passwort: "pass123",
      phoneNumber: "5553334444",
      address: "101 Kiefernstraße",
      securityQuestion: "Mädchenname der Mutter",
      agreement: true,
      newsletter: true,
      paymentOption: "Kreditkarte",
      bankName: "Bank GHI",
      bankBranch: "Filiale JKL",
      iban: "DE98765432109876543210",
      bic: "HIJKLM",
      kartennummer: "5678901234567890",
      gueltigkeitsdatum: "05/25"
    },
    {
      id: 7,
      name: "Sophia Miller",
      email: "sophia@example.com",
      passwort: "passpass",
      phoneNumber: "5557778888",
      address: "202 Ahornstraße",
      securityQuestion: "Stadt der Geburt",
      agreement: true,
      newsletter: false,
      paymentOption: "Überweisung",
      bankName: "Bank STU",
      bankBranch: "Filiale VWX",
      iban: "GB765432109876543210",
      bic: "STUVWX",
      kartennummer: "4567890123456789",
      gueltigkeitsdatum: "10/22"
    },
    {
      id: 8,
      name: "Daniel Taylor",
      email: "daniel@example.com",
      passwort: "daniel123",
      phoneNumber: "5556667777",
      address: "303 Walnussstraße",
      securityQuestion: "Name des Lieblingslehrers",
      agreement: false,
      newsletter: true,
      paymentOption: "paypal",
      bankName: "Bank YZA",
      bankBranch: "Filiale BCD",
      iban: "FR765432109876543210",
      bic: "YZABCD",
      kartennummer: "5678901234567890",
      gueltigkeitsdatum: "04/24"
    },
    {
      id: 9,
      name: "Olivia Martinez",
      email: "olivia@example.com",
      passwort: "olivia123",
      phoneNumber: "5558889999",
      address: "404 Zedernstraße",
      securityQuestion: "Lieblings-Fußballmannschaft",
      agreement: true,
      newsletter: true,
      paymentOption: "Kreditkarte",
      bankName: "Bank EFG",
      bankBranch: "Filiale HIJ",
      iban: "GB543210987654321098",
      bic: "EFGHIJ",
      kartennummer: "1234567890123456",
      gueltigkeitsdatum: "06/23"
    },
    {
      id: 10,
      name: "Noah Brown",
      email: "noah@example.com",
      passwort: "noahpass",
      phoneNumber: "5551234567",
      address: "505 Birkenstraße",
      securityQuestion: "Lieblingsbuch",
      agreement: false,
      newsletter: false,
      paymentOption: "Überweisung",
      bankName: "Bank KLM",
      bankBranch: "Filiale NOP",
      iban: "FR543210987654321098",
      bic: "KLMNOP",
      kartennummer: "098765432109",
      gueltigkeitsdatum: "03/22"
    },
    
  ];
  