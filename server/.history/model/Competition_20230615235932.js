const mongoose = require('mongoose')

const path = require('path')

//TERMINAR
const competitionSchema = new mongoose.Schema({
    nome:  String,
    DataPagamento: String,
    DataCompeticao: String,
    valor: Number,
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }]


})

const CompetitionModel = mongoose.model('Competition', competitionSchema)

const CRUD = {
    list: async () => {
        const competition = await CompetitionModel.find({}).lean()
        return  competition

    },

    save: async (nome, DataPagamento, DataCompeticao, valor, idPayment) => {

        const competition = new CompetitionModel({
            nome: nome,
            DataPagamento: DataPagamento,
            DataCompeticao: DataCompeticao,
            valor: valor,
            payments: idPayment ? idPayment : null //verificar
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
    },
    addPaymentToCompetition: async (competitionId, paymentId) => {
        try {
            const competition = await CompetitionModel.findById(competitionId)
            return competition
        } catch (error) {

        }
    }

}

module.exports = CRUD;

