const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    email: {type: String, default: ''},
    nome: {type: String, required: true},
    nomeCompeticao: {type: String, required: true},
    categoriaPeso: {type: String ,required: true},
    categoriaIdade: {type: String ,required: true},
    comprovante: {type: Buffer, require: false} //alterar
})


const paymentModel = mongoose.model('Payment', paymentSchema)


module.exports = {
    list: async () => {
        try {
            const payment = await paymentModel.find({}).lean()
            return payment
        } catch (error) {
            return `Erro ao listar. Erro --> ${error}`
        }


    }
}


/* API_KEY_pass

Alunos Assertados

-id
- Email
- Nome
- Nome da competicao
- categoria Peso -60
- categoria Idade senior

*/