
const mongoose = require('mongoose')

const {v4: uuidv4} = require('uuid')

const userSchema = new mongoose.Schema({
    id: uuidv4,
    nome: String,
    email: String,
    senha: String,
    permissoes: [String] // Campo de permissões
  });

const User = mongoose.model('User', userSchema);







