const mongoose = require('mongoose')



//TERMINAR
const competitionSchema = new mongoose.Schema({
    nome:  String,
    DataPagamento: String,
    DataCompeticao: String,
    valor: Number,
    Comprovante: {type: Buffer},
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})

const CompetitionModel = mongoose.model('Competition', competitionSchema)

const CRUD = {
    list: async () => {
        const competition = await CompetitionModel.find({}).lean()

        return  competition
    },

    save: async (nome, DataPagamento, DataCompeticao, valor, Comprovante) => {
        const competition = new CompetitionModel({
            n
        })
    }
}

module.exports = CRUD;

