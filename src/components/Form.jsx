import { useState } from "react";
import styles from './Form.module.css'
import React from "react";

const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={styles.form}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@mail.ru"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};

export default Form;
