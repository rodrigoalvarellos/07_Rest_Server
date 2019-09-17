// ====================
// PUERTO
// ====================
process.env.PORT = process.env.PORT || 3000;

// ====================
// ENTORNO
// ====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ====================
// Tokens
// ====================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30; // 60seg * 60min * 24hs * 30dias
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
// heroku config:set SEED="este-es-el-seed-produccion"




// ====================
// Base de datos
// ====================
let local = 'mongodb://localhost:27017/cafe';
// let remota = 'mongodb+srv://ralvarellos69:H4293tS2JN3PJ2Y7@cluster0-alygm.mongodb.net/cafe';
// Guardo la cadena como una variable de entorno en Heroku usando heroku config:set ...
let remota = process.env.MONGO_URI;
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = local;
} else {
    urlDB = remota;
}

// seteo la variable en el process enviroment
process.env.urlDB = urlDB;