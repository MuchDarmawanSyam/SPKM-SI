// Mengimpor Config Koneksi MySQL dan modul Express
const express = require('express');
const dbMysql = require('./mysql');
const app = express();
const port = 3030;

// Meggunakan Pengelolahan URL ExpressJS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set View dan Template Engine dan folder public
app.set('view engine', 'ejs');
app.use(express.static('public'));

