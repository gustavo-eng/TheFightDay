const mongoose = require('mongoose')

// Competicao [professor]
// - id *
// - Nome
// - Data  Inicio
// - Valor
// - Comprovante
// - fk (id usuario)


const competitionSchema = new mongoose.Schema({
    nome:  String,
    DataPagamento: { type: Date },
    DataCompeticao: {type: Date}
    // DataInicio:
})