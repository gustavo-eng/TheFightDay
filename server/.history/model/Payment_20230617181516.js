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
    comprovante: {type: Buffer, require: true, default: null, default: "data:image/png;base64,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"}, //alterar
    competicao: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition' },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

})



const paymentModel = mongoose.model('Payment', paymentSchema)


module.exports = {
    list: async () => {
        try {
            // analisar se precisa ser pela competicao ou pelo usuario
            const payment = await paymentModel.find({}).populate(["usuario", "competicao"]).lean()
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
            return `Erro ao realizar pagamento. ERRO -> ${error}`
        }
    },
    getById: async (id) => {
        try {
            return await paymentModel.findById(id).lean()
        } catch (err) {
            return res.status(500).json({msg: "Erro ao encontrar pagamento "})
        }
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
    getPaymentByUserId: async (idUser) => {
        try {
          const payment = await paymentModel.find({usuario: idUser}).populate("usuario").lean()
          return payment;
        } catch (error) {
            console.log('Erro ao obter pagamentos por nome de usuário:', error);
            return res.status(404).json({msg: "Payment not found"});
        }
    },
    updatePaymentByUserId: async (paymentId, userId,email, nome, nomeCompeticao, categoriaPeso, categoriaIdade, comprovante) => {
        try {
            const payment = await paymentModel.findByIdAndUpdate(paymentId,
                {
                    email: email,
                    nome: nome,
                    nomeCompeticao: nomeCompeticao,
                    categoriaPeso: categoriaPeso,
                    categoriaIdade: categoriaIdade,
                    comprovante: comprovante,
                },
                {new : true}
            ).where({ usuario: userId });

            return payment
        } catch (error) {
            res.status(500).json({msg: "Erro ao atualizar payment"})
        }
    }

}



