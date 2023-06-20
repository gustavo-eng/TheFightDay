
const validatorNewCompetition = (nameCompetition,newDatePayment ,newDateCompetition,newPrice) => {
    if((nameCompetition.length > 3 && newDatePayment.length > 3  && newDateCompetition.length > 3 && newPrice > 0 )) {
        console.log('Val idator new competition')
        return true
    } else {
        return false
    }
}

const validatorUpdateUser = (user, password, email) => {
    console.log('validator new user')

    // if() {
    //     return true

    // } else {

    //     return false

    // }

}

export default {validatorNewCompetition, validatorUpdateUser};