const mongoose = require('mongoose')



//TERMINAR
const competitionSchema = new mongoose.Schema({
    nome:  String,
    DataPagamento: { type: Date },
    DataCompeticao: {type: Date},
    valor: Number,
    Comprovante: {type: Buffer}

    // DataInicio:
})