const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes'); // Importa as rotas

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

module.exports = app;