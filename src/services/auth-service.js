import axios from "axios";
import authHeader from "./auth-header";

const apiUrl = process.env.REACT_APP_API_URL

const register = (email, password) => {
    return axios.post(apiUrl + "/users", {
        "user": {
            email,
            password
        }
    });
};

const login = (email, password) => {
    return axios
        .post(apiUrl + "/users/sign_in", {
            "user": {
                email,
                password
            },
            headers: authHeader()
        },
        )
        .then((response) => {
            console.log(response.headers.authorization);
            const jwttoken = response.headers.authorization.split('Bearer ')[1];
            localStorage.setItem("token", jwttoken);
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("token");
    return axios.post(apiUrl + '/users/sign_out', { headers: authHeader() });
};

const getCurrentUser = () => {
     axios.get(apiUrl + '/current_user', { headers: authHeader() }).then((response) =>{
         console.log(response.data)
         return response.data
     })
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};
export default authService