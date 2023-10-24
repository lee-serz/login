import React from "react";
import { Redirect } from "react-router-dom";
import {useAuth} from '../hooks/use-auth'
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

const HomePage = () => {
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div className="">
      <h1>Добро пожаловать на главную страницу!</h1>
      <button onClick={() => dispatch(removeUser())}> Выйти из {email} </button>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default HomePage;
