import React from "react";

import AuthService from "../services/auth-service";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        AuthService.login("talha+2@gmail.com", "12345678").then(
            () => {
                window.location.reload();
            },
            (error) => {
                console.log(error);
            }
        );
    }

    const handleUser = (e) => {
        e.preventDefault();
        AuthService.getCurrentUser()
}


const deleteUser = (e) => {
    e.preventDefault();
    AuthService.logout()
}


return (
    <div className="col-md-12">
        <div className="card card-container">
            <button onClick={handleLogin}>sigin</button>
            <button onClick={handleUser}>userdata</button>
            <button onClick={deleteUser}>logout</button>

        </div>
    </div>
);
};

export default Login;