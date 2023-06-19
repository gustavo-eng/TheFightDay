let controllServiceCompetition = {
    updateCompetition: async (idCompetition, token, name, dataPayment, dataCompetition, price) => {
        const data = {
            method: 'PUT',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            body: JSON.stringify({
                name: name,
                dataPayment: dataPayment,
                dataCompetition: dataCompetition,
                price: price
            })
        }
        const response = await fetch(`http://localhost:3333/competition/${idCompetition}`, data)

        if (!response.ok) {
            throw new Error('2Erro ao atualizar a competição2222');
        }

        return response.json();
    }
}

export default controllServiceCompetition;



/*
let controllServiceCompetition = {
    updateCompetition: async (idCompetition, token, name, dataPayment, dataCompetition, price) => {
        const data = {
            method: 'PUT',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            body: JSON.stringify({
                name: name,
                dataPayment: dataPayment,
                dataCompetition: dataCompetition,
                price: price
            })
        }
        const response = await fetch(`http://localhost:3333/competition/${idCompetition}`, data)

        if (!response.ok) {
            throw new Error('2Erro ao atualizar a competição2222');
        }

        return response.json();
    }
}

export default controllServiceCompetition;
*/

/*
updatePayment: async (token, idUser, idPayment, email, user, nameCompetition, categoryWeight, categoryYear, picture) => {
        const data = {
            method: 'PUT',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            body: JSON.stringify({
                email: email,
                user: user,
                nameCompetition: nameCompetition,
                categoryWeight: categoryWeight,
                categoryYear: categoryYear,
                picture: "",
            })
        }
        const response = await fetch(`http://localhost:3333/payment/update/${idUser}/${idPayment}`, data)
        return response.json()
    },
*/