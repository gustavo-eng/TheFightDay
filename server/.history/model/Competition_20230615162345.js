const mongoose = require('mongoose')

const path = require('path')

//TERMINAR
const competitionSchema = new mongoose.Schema({
    nome:  String,
    DataPagamento: String,
    DataCompeticao: String,
    valor: Number,

    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})

const CompetitionModel = mongoose.model('Competition', competitionSchema)

const CRUD = {
    list: async () => {
        const competition = await CompetitionModel.find({}).lean()
        return  competition

    },

    save: async (nome, DataPagamento, DataCompeticao, valor) => {

        const competition = new CompetitionModel({
            nome: nome,
            DataPagamento: DataPagamento,
            DataCompeticao: DataCompeticao,
            valor: valor,

        }).save()

         return await competition
    },
    getById: async (id) => {
        return await CompetitionModel.findById(id).lean()
    },
    update: async (id, nome, DataPagamento, DataCompeticao, valor) => {
        let competition = await CompetitionModel.findByIdAndUpdate(id,
            {nome: nome,DataPagamento: DataPagamento ,DataCompeticao: DataCompeticao,
            valor: valor}

        ).then(competition => {
            return competition

        }).catch(err => {
            console.log('erro ao alterar competicao')
            return
        })

    },
    delete: async (id) => {
        return await CompetitionModel.findByIdAndDelete(id).lean()
    }

}

module.exports = CRUD;

