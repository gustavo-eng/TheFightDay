let taskServicePayment = {


}

export default taskServicePayment


/*
 updateUser: async (id, token, email, user, password,permission) => {
        const data = {
            method: 'PUT',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            body: JSON.stringify({user: user, password: password, email: email, permission: permission })
        }
        const response = await fetch(`http://localhost:3333/users/${id}`,data )
        return await response.json()
    },

*/

/*
router.post('/', controllAcces.accessControl, async (req, res) => {
    const { email, name, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    const idCompetition = req.query.competition
    competitionDAO.getById(idCompetition).then(() => {
         paymentDAO.save(email, name, nameCompetition, categoryWeight, categoryYear, picture, idCompetition, req.id)
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