
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    id:
    nome: String,
    email: String,
    senha: String,
    permissoes: [String] // Campo de permissões
  });

const User = mongoose.model('User', userSchema);







