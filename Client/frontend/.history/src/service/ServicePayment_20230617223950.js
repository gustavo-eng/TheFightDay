let servicePayment = {
    savePayment: async (idCompetition,token ,email, user, nameCompetition, categoryWeight, categoryYear, picture) => {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
        }
    }
}


export default servicePayment;


/*
 login: async function(user, password) {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({user: user, password: password })
        }

        const response = await fetch('http://localhost:3333', data)
        return await response.json()

    },

*/