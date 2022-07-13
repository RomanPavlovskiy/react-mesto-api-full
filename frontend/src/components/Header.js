import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      <Switch>
        <Route exact path="/sign-in">
          <NavLink to="/sign-up" className="header__link">
            Регистрация
          </NavLink>
        </Route>
        <Route exact path="/sign-up">
          <NavLink to="/sign-in" className="header__link">
            Войти
          </NavLink>
        </Route>
        <Route exact path="/">
          <div className="header__user">
            <p className="header__email">{props.email}</p>
            <NavLink
              to="/sign-in"
              className="header__link"
              onClick={props.onSignOut}
            >
              Выйти
            </NavLink>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
