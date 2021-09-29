import React from "react";

import "../ui/styles/Register&Login.css";
import LoginForm from "../components/LoginForm";
import { BigCard } from "../ui";

const Login: React.FC = () => {
  return (
    <div className="LoginPage__layout">
      <BigCard height="360px" width="500px" borderSize={2}>
        <h2 style={{ textAlign: "center" }}>LOGIN</h2>
        <div>
          <LoginForm />
        </div>
      </BigCard>
    </div>
  );
};

export default Login;
