



const isAuthenticated = () => {
    if( localStorage.getItem('token') !== null) {
        return true;
    } else {
        return false
    }
}


export default isAuthenticated;