import Head from "next/head";
import Link from "next/link";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutlined,
} from "@mui/icons-material";

import styles from "../styles/Registration.module.css";

function RegisterForm() {
  return (
    <div className={styles.RegisterForm}>
      <div>
        <label className={styles.InputLabel}>Username</label>
        <div className={styles.InputField}>
          <span>
            <PersonOutlined />
          </span>
          <input type="text" name="username" />
        </div>
      </div>
      <div>
        <label className={styles.InputLabel}>Email</label>
        <div className={styles.InputField}>
          <span>
            <EmailOutlined />
          </span>
          <input type="email" name="email" />
        </div>
      </div>
      <div>
        <label className={styles.InputLabel}>Password</label>
        <div className={styles.InputField}>
          <span>
            <LockOutlined />
          </span>
          <input type="password" name="password" />
        </div>
      </div>
      <div className={styles.LoginFormLinks}>
        <Link href="/login">
          <a>Already have account ?</a>
        </Link>
      </div>
      <div className={styles.ButtonContainer}>
        <button type="submit" className={styles.Button}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

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
