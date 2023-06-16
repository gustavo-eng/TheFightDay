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
    listCompetition: async (token) => {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            // body: JSON.stringify({user: user, password: password })
        }

        const response = await fetch('http://localhost:3333/competition', data)
        return await response.json()

    }



}


export default taskService;


