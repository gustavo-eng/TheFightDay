
const mongoose = require('mongoose')

// const {v4} = require('uuid')
// // import { v4 } from 'uuid';
// console.log('v4 --> ')
// console.log(v4())
const paymentDAO = require('../model/Payment')
const userSchema = new mongoose.Schema({
    // id: mongoose.Schema.Types.UUID,
    nome: String,
    email: String,
    senha: String,
    permissoes: [String], // Campo de permissões
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }] // Um usuario pode ter varias competicoes
});

const UserModel = mongoose.model('User', userSchema);


const CRUD = {
    list: async () => {
        try {
            const user = await UserModel.find({}).lean()
            console.log('Imprimindo user list:async ID')
            console.log(user[0]._id.toString()) // somente a string
            console.log(user[0]._id) // ObjectId
            return user

        } catch (error) {
            return `Erro ao listar. Erro --> ${error}`
        }
    },
    save: async (email, name, password, permission, idPayment) => {
        const user = new UserModel({
            email:email,
            nome: name,
            senha: password,
            permissoes: permission,
            payments: idPayment ? idPayment : null //verificar
        })
        await user.save()
        console.log('User saved ID --> ')
        console.log(user._id)

        return user
    },
    update: async (id, email, nome, password, permission) => {
        let user = await UserModel.findByIdAndUpdate(id,
            {email: email, nome: nome, senha: password, permissoes: permission}
        ).then(user => {
            console.log('Email novo para ser alterado')
            console.log(email)
            console.log('Nome novo para ser alterado')
            return user
        }).catch(err => {
            console.log('Erro ao alterar user ')
            return err
        })

        return user
    },

    delete: async (id) => {
        return await UserModel.findByIdAndDelete(id).lean()
    },

    getById: async (id) => {
        return await UserModel.findById(id).lean()
    },

    // Para o jwt
    getByNameAndPassord: async (usersname, password) => {
        try {
            const user =  await UserModel.findOne({ nome: usersname, senha: password }).lean();
            console.log('Usuario correspondente  --> ')
            console.log(user)

            return user
        } catch (error) {
           console.log('Erro ao encontrar usuario, erro --> ')
           console.log(error)
           return false
        }
    }
    //lista seus pagamentos


}

module.exports = CRUD;





