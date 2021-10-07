import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login'

function App() {
  return (
    <div className="">
      <h1>ss{process.env.REACT_APP_API_KEY}</h1>
      <Login />
    </div>
  );
}

export default App;
