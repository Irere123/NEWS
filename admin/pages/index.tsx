import Head from "next/head";
import { useRouter, NextRouter } from "next/router";

import { useMeQuery } from "../generated/graphql";

import styles from "../styles/Registration.module.css";
import RegisterForm from "../components/registration/RegisterForm";
import { withApollo } from "../lib/withApollo";

function Register() {
  const { data, loading } = useMeQuery();
  const router: NextRouter = useRouter();
  let body = null;

  if (loading) {
    return null;
  } else if (data?.me === null) {
    return (
      <div>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
  } else {
    router.push("/home");
  }

  return <>{body}</>;
}

export default withApollo({ ssr: true })(Register);
