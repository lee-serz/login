import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <h1>Войти</h1>
      <Login />
      <p>
        Ещё нет аккаунта? <Link to="/register">Регистрация</Link>
      </p>
    </>
  );
};

export default LoginPage;
