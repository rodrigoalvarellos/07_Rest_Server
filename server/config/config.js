// ====================
// PUERTO
// ====================
process.env.PORT = process.env.PORT || 3000;

// ====================
// ENTORNO
// ====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ====================
// Base de datos
// ====================
let local = 'mongodb://localhost:27017/cafe';
let remota = 'mongodb+srv://ralvarellos69:H4293tS2JN3PJ2Y7@cluster0-alygm.mongodb.net/cafe';
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = local;
} else {
    urlDB = remota;
}

// seteo la variable en el process enviroment
process.env.urlDB = urlDB;