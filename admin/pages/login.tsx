import Head from "next/head";
import { Email } from "@mui/icons-material";

import styles from "../styles/Registration.module.css";

function LoginForm() {
  return (
    <>
      <div className={styles.InputField}>
        <span>
          <Email />
        </span>
        <input type="email" name="email" />
      </div>
    </>
  );
}

function Login() {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login - NEWS</title>
      </Head>
      <main className={styles.LoginContainer}>
        <div className={styles.LoginCard}>
          <h2 className={styles.LoginCardTitle}>LOGIN</h2>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default Login;
