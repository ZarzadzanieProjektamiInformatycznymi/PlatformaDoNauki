const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const { ftruncate } = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/../projekt")));

const uri = "mongodb://localhost:27017/";
const dbName = "userAuthDB";
const collections = "users";
const port = 3000;

async function ConnectToDb() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Połączenie otwarte");
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error(err);
  }
}

app.listen(port, () => console.log(`Serwer działa na porcie ${port}`));
// //server.js
// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql');
// const app = express();
// const PORT = 3000;


// // Middleware
// app.use(cors());
// app.use(express.json()); // Do obsługi danych w formacie JSON

// // Połączenie z bazą MySQL
// const db = mysql.createConnection({
//     host: 'MaciekMojsa',    // lub adres serwera MySQL
//     user: 'Projekt1',         // użytkownik bazy danych MySQL
//     password: 'admin', // hasło do bazy danych
//     database: 'projekt',// nazwa bazy danych
    
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Błąd połączenia z MySQL: ', err);
//         return;
//     }
//     console.log('Połączono z bazą MySQL');
// });

