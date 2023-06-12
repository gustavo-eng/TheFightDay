const mongoose = require('mongoose')



//TERMINAR
const competitionSchema = new mongoose.Schema({
    nome:  String,
    DataPagamento: { type: Date,default: Date.now() },
    DataCompeticao: {type: Date},
    valor: Number,
    Comprovante: {type: Buffer},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})

const CompetitionModel = mongoose.model('Competition', competitionSchema)

const CRUD = {
    list: async () => {
        const competition = await CompetitionModel.find({}).lean()

        return  competition
    },

    save: async (nome, DataPagamento, DataCompeticao, )
}

module.exports = CRUD;

