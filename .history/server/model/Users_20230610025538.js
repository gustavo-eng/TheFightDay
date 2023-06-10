
const mongoose = require('mongoose')

const {v4} = require('uuid')
// import { v4 } from 'uuid';
console.log('v4 --> ')
console.log(v4())
const userSchema = new mongoose.Schema({
    id: v4(),
    nome: String,
    email: String,
    senha: String,
    permissoes: [String] // Campo de permissões
});

const UserModel = mongoose.model('User', userSchema);


const CRUD = {
    list: async () => {
        const user = await UserModel.find({}).lean()
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
        return user
    }

}

module.exports = CRUD;



