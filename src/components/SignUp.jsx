import React from "react";
import { useHistory } from "react-router-dom";
import Form from './Form'
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRegister = (email, password) => {
        const auth = getAuth();

        if (password.length < 6) {
            alert('Password should be at least 6 characters');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                history.push('/');
            })
            .catch(error => {
                console.error('Error creating user:', error);
                // Handle the error and provide user-friendly feedback.
            });
    };

    return (
        <Form
            title="Sign Up"
            handleClick={handleRegister}
        />
    );
}

export default SignUp;
