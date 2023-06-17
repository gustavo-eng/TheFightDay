let taskService = {

    login: async function(user, password) {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({user: user, password: password })
        }

        const response = await fetch('http://localhost:3333', data)
        return await response.json()

    },
    listCompetition: async (token) => { // arrumar
        const data = {
            method: 'GET',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
        }

        const response = await fetch('http://localhost:3333/competition', data).then(el => el.json()).then(e => {
            return e
        })
         return  response
    },
    register: async (user, password, email, permission) => {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({user: user, password: password, email: email, permission: permission })
        }
        const response = await fetch('http://localhost:3333/users', data)
        // nao precisa retornar nada !
        return await response.json()
    },
    updateUser: async (id, token, email, user, password,permission) => {
        const data = {
            method: 'PUT',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            body: JSON.stringify({user: user, password: password, email: email, permission: permission })
        }
        const response = await fetch(`http://localhost:3333/users/${id}`,data )
        return await response.json()
    },
    deleteUser: async (id, token) => {
        const data = {
            method: 'DELETE',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
        }
        const response = await fetch(`http://localhost:3333/users/${id}`,data )
        return await response.json()
    }

    //newUser

//fetch('http://localhost:3333/competition').then(el => el.json()).then(e => console.log(e))
//fetch('http://localhost:3333/competition').then(el => el.json()).then(e => console.log(e[0].nome))
}


export default taskService;


