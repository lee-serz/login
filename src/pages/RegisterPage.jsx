import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
  return (
    <>
      <h1>Зарегистрироваться</h1>
      <SignUp />
      <p>
        Уже есть аккаунт? <Link to="/login">Вход</Link>
      </p>
    </>
  );
};

export default RegisterPage;
