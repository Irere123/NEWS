import Head from "next/head";
import Link from "next/link";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";

import styles from "../styles/Registration.module.css";

function LoginForm() {
  return (
    <div className={styles.LoginForm}>
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
        <Link href="/change-password">
          <a>Forgot Password</a>
        </Link>
        <h3>Or</h3>
        <Link href="/register">
          <a>Create new account</a>
        </Link>
      </div>
      <div className={styles.ButtonContainer}>
        <button type="submit" className={styles.Button}>
          Login
        </button>
      </div>
    </div>
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
