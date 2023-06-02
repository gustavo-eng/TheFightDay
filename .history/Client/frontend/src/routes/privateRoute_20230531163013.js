
import isAuthenticated from "../auth";



const privateRoute = ({ children }) => {
    if (isAuthenticated()) {
        return children;
    }
}