import Head from "next/head";

import styles from "../styles/Registration.module.css";
import RegisterForm from "../components/registration/RegisterForm";

function Register() {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register - NEWS</title>
      </Head>
      <main className={styles.Container}>
        <div className={styles.RegisterCard}>
          <h2 className={styles.CardTitle}>CREATE ACCOUNT </h2>
          <RegisterForm />
        </div>
      </main>
    </div>
  );
}

export default Register;
