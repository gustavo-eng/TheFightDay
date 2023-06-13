const mongoose = require('mongoose')

// Tabela de pagamento, ao mesmo tempo
//incricao para o professor
//precisa ter um botao para validar

const paymentSchema = new mongoose.Schema({
    email: {type: String, default: ''},
    nome: {type: String, required: true},
    nomeCompeticao: {type: String, required: true},
    categoriaPeso: {type: String ,required: true},
    categoriaIdade: {type: String ,required: true},
    comprovante: {type: Buffer, require: false, default: null} //alterar
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
    },
    save: async (email, nome, nomeCompeticao, categoriaPeso, categoriaIdade, comprovante) => {
        try {
            const payment = new paymentModel({
                email: email,
                nome: nome,
                nomeCompeticao: nomeCompeticao,
                categoriaPeso: categoriaPeso,
                categoriaIdade: categoriaIdade,
                comprovante: comprovante
            }).save()

            return await payment
        } catch (error) {
            return `Erro ao realizar pagamento. ERRO -> ${error}, emil -> ${email}`
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