let taskServicePayment = {
    payCompetition: async (idCompetition, token, email, user, nameCompetition,  categoryWeight, categoryYear, picture) => {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json', 'Custom-Header': token },
            body: JSON.stringify({
                user: user,
                email: email,
                nameCompetition: nameCompetition,
                categoryWeight: categoryWeight,
                categoryYear: categoryYear,
                picture: picture,
            })
        }

        const response = await fetch(`http://localhost:3333/payment?competition=${idCompetition}`, data)
        return await response.json()
    }

}

export default taskServicePayment


/*
router.post('/', controllAcces.accessControl, async (req, res) => {
    const { email, user, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    const idCompetition = req.query.competition
    competitionDAO.getById(idCompetition).then(() => {
         paymentDAO.save(email, user, nameCompetition, categoryWeight, categoryYear, picture, idCompetition, req.id)
            .then(payment => {
                UserDAO.addPaymentToUser(req.id, payment._id)
                competitionDAO.addPaymentToCompetition(idCompetition ,payment._id)
                res.status(200).json(payment)
            }).catch(err => {
                res.status(500).json({msg: `Erro ao salvar pagamento. Error -> ${err}`, email: email})
            })
    }).catch(err => {
        res.status(404).json({msg: "Competition not found"})
    })
})
*/

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