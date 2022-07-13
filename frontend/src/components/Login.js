import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <section className="authorization">
      <h2 className="authorization__title">Вход</h2>
      <form className="authorization__form" onSubmit={handleLoginSubmit}>
        <input
          onChange={handleEmailChange}
          className="authorization__input"
          placeholder="Email"
          name="email"
          type="email"
          required
          value={email || ""}
        ></input>
        <input
          onChange={handlePasswordChange}
          className="authorization__input"
          placeholder="Пароль"
          name="password"
          type="password"
          required
          value={password || ""}
        ></input>
        <button className="authorization__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
