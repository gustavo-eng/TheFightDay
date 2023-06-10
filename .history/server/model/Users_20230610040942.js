
const mongoose = require('mongoose')

// const {v4} = require('uuid')
// // import { v4 } from 'uuid';
// console.log('v4 --> ')
// console.log(v4())
const userSchema = new mongoose.Schema({
    // id: mongoose.Schema.Types.UUID,
    nome: String,
    email: String,
    senha: String,
    permissoes: [String] // Campo de permissões
});

const UserModel = mongoose.model('User', userSchema);


const CRUD = {
    list: async () => {
        const user = await UserModel.find({}).lean()
        console.log('Imprimindo user list:async ID')
        console.log(user[0]._id.toString()) // somente a string
        console.log(user[0]._id) // ObjectId
        return user
    },
    save: async (email, name, password, permission) => {
        const user = new UserModel({
            email:email,
            nome: name,
            senha: password,
            permissoes: permission
        })
        await user.save()
        console.log('User saved ID --> ')
        console.log(user._id)

        return user
    },
    update: async (id, email, nome, password, permission) => {
        let user = await UserModel.findByIdAndUpdate(id,
            {email: email, nome: nome, password: password, permission: permission}
        ).then(user => {
            return user
        }).catch(err => {
            console.log('Erro ao alterar user ')
            return
        })

        return user
    },

    delete: async (id) => {
        return await EsportModel.findByIdAndDelete(id)
    },

    getById: async (id) => {
        return await EsportModel.findById(id).lean()
    }

}

module.exports = CRUD;





