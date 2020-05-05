// ===========================
// Puerto
// ===========================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// Entorno
// ===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================
// Vencimiento Token
// ===========================
process.env.CADUCIDAD_TOKEN = 60*60*24*30;

// ===========================
// SEED auth
// ===========================
process.env.SEED = process.env.SEED || "este-es-el-seed";

// ===========================
// Base de datos
// ===========================
let urlBD;

if( process.env.NODE_ENV === 'dev') {
   urlBD = 'mongodb://localhost:27017/cafe';
} else {
   urlBD = 'mongodb+srv://cafe-user:123@cluster0-ptrfp.mongodb.net/cafe';
}

process.env.URLBD = urlBD;

// ===========================
// Google client id
// ===========================

process.env.CLIENT_ID = process.env.CLIENT_ID || '985221881368-o04vui4rsbgp3om22j0kgc6dttq984n1.apps.googleusercontent.com';