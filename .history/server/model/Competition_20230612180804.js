const mongoose = require('mongoose')



//TERMINAR
const competitionSchema = new mongoose.Schema({
    nome:  String,
    DataPagamento: String,
    DataCompeticao: String,
    valor: Number,
    Comprovante: {type: String, default: null},
    src: {type: String, default: null}
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})

const CompetitionModel = mongoose.model('Competition', competitionSchema)

const CRUD = {
    list: async () => {
        const competition = await CompetitionModel.find({}).lean()
        return  competition
    },

    save: async (nome, DataPagamento, DataCompeticao, valor, comprovante) => {

        const competition = new CompetitionModel({
            nome: nome,
            DataPagamento: DataPagamento,
            DataCompeticao: DataCompeticao,
            valor: valor,
            Comprovante: comprovante,
        }).save()

         return await competition
    }
}

module.exports = CRUD;

