import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registraionForm/RegistrationForm";

class Home extends React.Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <hr />
        <h2>Register below:</h2>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
