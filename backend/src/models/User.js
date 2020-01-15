const mongoose = require('mongoose');

// mapear dados dos users
const UserSchema = new mongoose.Schema({
  email: String,
});

// Exportar o model com o mongoose, os parametros é o nome
//do model e o Schema dele, ou seja, agora o mongo 
//sabe como deve criar o user
module.exports = mongoose.model('User', UserSchema);