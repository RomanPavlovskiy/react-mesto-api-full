import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRegistrationSubmit(e) {
    e.preventDefault();
    onRegister(email, password);
  }

  return (
    <section className="authorization">
      <h2 className="authorization__title">Регистрация</h2>
      <form className="authorization__form" onSubmit={handleRegistrationSubmit}>
        <input
          className="authorization__input"
          placeholder="Email"
          name="email"
          type="email"
          required
          value={email || ""}
          onChange={handleEmailChange}
        ></input>
        <input
          className="authorization__input"
          placeholder="Пароль"
          name="password"
          type="password"
          required
          value={password || ""}
          onChange={handlePasswordChange}
        ></input>
        <button className="authorization__button" type="submit">
          Зарегистрироваться
        </button>
        <div className="authorization__login">
          <p className="authorization__login_text">Уже зарегистрированы?</p>
          <NavLink to="sign-in" className="authorization__login_link">
            Войти
          </NavLink>
        </div>
      </form>
    </section>
  );
}

export default Register;
