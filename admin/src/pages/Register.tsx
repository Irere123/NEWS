import React from "react";

import "../ui/styles/Register&Login.css";
import { BigCard } from "../ui";
import RegisterForm from "../components/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="RegisterPage__layout">
      <BigCard height="450px" width="500px" borderSize={2}>
        <h2 style={{ textAlign: "center" }}>CREATE ACCOUNT</h2>
        <div>
          <RegisterForm />
        </div>
      </BigCard>
    </div>
  );
};
export default Register;
