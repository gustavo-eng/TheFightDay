const mongoose = require('mongoose')

// Tabela de pagamento, ao mesmo tempo
//incricao para o professor
//precisa ter um botao para validar

const paymentSchema = new mongoose.Schema({
    email: {type: String, default: ''},
    nome: {type: String, required: false},
    nomeCompeticao: {type: String, required: false},
    categoriaPeso: {type: String ,required: false},
    categoriaIdade: {type: String ,required: false},
    comprovante: {type: Buffer, require: true, default: null}, //alterar
    competicao: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition' },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

})



const paymentModel = mongoose.model('Payment', paymentSchema)


module.exports = {
    list: async () => {
        try {
            const payment = await paymentModel.find({}).populate("Competition")
            return payment
        } catch (error) {
            return `Erro ao listar. Erro --> ${error}`
        }
    },
    save: async (email, nome, nomeCompeticao, categoriaPeso, categoriaIdade, comprovante, idCompeticao, userId) => {
        try {
            console.log(`Email payment - ${email}`)
            const payment = new paymentModel({
                email: email,
                nome: nome,
                nomeCompeticao: nomeCompeticao,
                categoriaPeso: categoriaPeso,
                categoriaIdade: categoriaIdade,
                comprovante: comprovante,
                competicao: idCompeticao,
                usuario: userId
            }).save()

            return await payment
        } catch (error) {
            return `Erro ao realizar pagamento. ERRO -> ${error}, emil -> ${email}`
        }
    },
    getById: async (id) => {
        return await paymentModel.findById(id).lean()
    },
    delete: async (id) => {
        return await paymentModel.findByIdAndDelete(id).lean()
    },
    update: async (id, email, nome, nomeCompeticao, categoriaPeso, categoriaIdade, comprovante) => {
        let payment = await paymentModel.findByIdAndUpdate(id,
            {
                email: email,
                nome: nome,
                nomeCompeticao: nomeCompeticao,
                categoriaPeso: categoriaPeso,
                categoriaIdade: categoriaIdade,
                comprovante: comprovante
            }
        ).then(payment => {
                return payment

        }).catch(err => {
            console.log('Nao foi possivel atualizar esse pagamento')
            return
        })
    },
    //getByFkUser:

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