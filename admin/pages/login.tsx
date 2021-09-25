import Head from "next/head";

import styles from "../styles/Registration.module.css";
import LoginForm from "../components/registration/LoginForm";

function Login() {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login - NEWS</title>
      </Head>
      <main className={styles.Container}>
        <div className={styles.LoginCard}>
          <h2 className={styles.CardTitle}>LOGIN</h2>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default Login;
