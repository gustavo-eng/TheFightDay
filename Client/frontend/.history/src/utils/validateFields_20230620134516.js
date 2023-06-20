
const validatorNewCompetition = (nameCompetition,newDatePayment ,newDateCompetition,newPrice) => {
    let p = 'das'
    p.length
    if((nameCompetition.length > 3 && newDatePayment.length > 3  && newDateCompetition.length > 3 && newPrice > 0 )) {
        return true
    } else {
        return false
    }
    console.log('Validator new competition')
}

const validatorUpdateUser = () => {
    console.log('validator new user')

}

export default {validatorNewCompetition, validatorUpdateUser};