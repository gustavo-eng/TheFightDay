let controllServicePayment = {
    savePayment: async (idCompetition,token ,email, user, nameCompetition, categoryWeight, categoryYear, picture) => {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            body: JSON.stringify({
                email: email,
                user: user,
                nameCompetition: nameCompetition,
                categoryWeight: categoryWeight,
                categoryYear: categoryYear,
                picture: picture
            })
        }

        const response = await fetch(`http://localhost:3333/payment?competition=${idCompetition}`, data)
        return await response.json()
    },
    deletePayment: async (idPayment, token) => {
        const data = {
            method: 'DELETE',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
        }
        const response = await fetch(`http://localhost:3333/${idPayment}`, data)
        return  response
    },
    listPayment: async (token) => {
        const data = {
            method: 'GET',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
        }
        const response = await fetch('http://localhost:3333/users/profile', data)
        return response
    },
    updatePayment: async (token, idUser, idPayment, email, user, nameCompetition, categoryWeight, categoryYear, picture) => {
        const data = {

        }
        const response = await fetch(``, data)
        return response.json()
    }
}


export default controllServicePayment;


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