const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const port = 3333;

mongoose.connect('mongodb+srv://dvcrystal:dvcrystal@cluster0-set5u.mongodb.net/aircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// req.query = acessar os query params(pela url)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo de requisição (para criação, edição), uar app.use(express.json());

app.use(express.json());

//após importar o arquivo routes
app.use(routes);

//defnir a porta do servidor
app.listen(port);