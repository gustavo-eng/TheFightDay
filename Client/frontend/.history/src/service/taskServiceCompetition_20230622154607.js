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
    },
    saveCompetition: async (token, name, dataPayment, dataCompetition, price) => {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            body: JSON.stringify({
                name: name,
                dataPayment: dataPayment,
                dataCompetition: dataCompetition,
                price: price
            })
        }
        const response = await fetch('http://localhost:3333/competition/', data)

        if (!response.ok) {
            throw new Error('2Erro ao atualizar a competição2222');
        }

        return response.json()

    },
    deleteCompetition: async (idCompetition, token) => {
        const data = {
            method: 'DELETE',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
        }
        const response = await fetch(`http://localhost:3333/competition/${idCompetition}`, data)

        if (!response.ok) {
            throw new Error('2Erro ao atualizar a competição2222');
        }

        return response.json()
    },
    paginateCompetition:async (pages) => {
        const data = {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
        }
        const response = await fetch(`http://localhost:3333/competition/pagination/${pages}`, data)

        if(!response.ok) {
            throw new Error('Erro ao paginar as competições');
        }
    }
}

export default controllServiceCompetition;


/*
router.post("/", controllAcces.accessControl, controllAcces.permissioAdminControll ,(req, res) => {
    // const {name, dataPayment, dataCompetition, price, voucher} = req.body
    const {name, dataPayment, dataCompetition, price} = req.body
    competitionDAO.save(name, dataPayment, dataCompetition,price)
    .then(competition => {
        res.status(201).json(competition)

    }).catch(err => {
        res.status(400).json({msg: `Erro ao salvar . Erro : ${err}`})
    })
})

*/


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