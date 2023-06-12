const mongoose = require('mongoose')

const path = require('path')

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
        try {
            const competition = await CompetitionModel.find().lean()

            return  competition
        } catch (error) {
            console.log('Olha o erro --> ' + error)
            return null
        }
    },

    save: async (nome, DataPagamento, DataCompeticao, valor, comprovante, file) => {

        const competition = new CompetitionModel({
            nome: nome,
            DataPagamento: DataPagamento,
            DataCompeticao: DataCompeticao,
            valor: valor,
            Comprovante: comprovante, // Name
            src: file
        }).save()

         return await competition
    },

}

module.exports = CRUD;

