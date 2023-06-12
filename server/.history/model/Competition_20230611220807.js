const mongoose = require('mongoose')



//TERMINAR
const competitionSchema = new mongoose.Schema({
    nome:  String,
    DataPagamento: { type: Date },
    DataCompeticao: {type: Date},
    valor: Number,
    Comprovante: {type: Buffer},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})