require('dotenv').config();
const mysql = require('mysql');

// Erstelle die Datenbankverbindung
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Funktion, um die Verbindung aufzubauen
const connectWithDelay = () => {
  console.log('Warte 10 Sekunden, bevor die Verbindung zur Datenbank aufgebaut wird...');
  
  setTimeout(() => {
    db.connect((err) => {
      if (err) {
        console.error('Fehler beim Verbinden mit der Datenbank:', err);
        return;
      }
      console.log('MySQL Connected...');
    });
  }, 10000); // 10 Sekunden
};

// Starte die Verbindung mit Verzögerung
connectWithDelay();

module.exports = db;

