import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        history.push("/");
      })
      .catch(()=>alert('Такого пользователя не существует'))
  };

  return <Form title="Sign In" handleClick={handleLogin} />;
};

export default Login;
