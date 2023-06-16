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
            method: 'GET',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            // body: JSON.stringify({user: user, password: password })
        }

        const response = await fetch('http://localhost:3333/competition', data).then(e => e.json())
        .then(elemento =>   elemento)
        // return await response.json()

    }


//fetch('http://localhost:3333/competition').then(el => el.json()).then(e => console.log(e[0].nome))
}


export default taskService;


