import Link from "next/link";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";

import styles from "../../styles/Registration.module.css";
import { useLoginMutation } from "../../generated/graphql";
import { toErrorMap } from "../../lib/toErrorMap";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [login] = useLoginMutation();
  const router = useRouter();

  return (
    <Formik<FormValues>
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await login({
          variables: values,
        });

        if (response.data?.login?.errors) {
          setErrors(toErrorMap(response.data.login.errors));
        }

        if (response.data?.login?.ok) {
          router.push("/");
        }
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className={styles.LoginForm}>
            <div>
              <label className={styles.InputLabel}>Email</label>
              <div className={styles.LoginInputField}>
                <span>
                  <EmailOutlined />
                </span>
                <input
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                />
              </div>
              {errors && (
                <span className={styles.ErrorMessage}>{errors.email}</span>
              )}
            </div>
            <div>
              <label className={styles.InputLabel}>Password</label>
              <div className={styles.LoginInputField}>
                <span>
                  <LockOutlined />
                </span>
                <input
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                />
              </div>
              {errors && (
                <span className={styles.ErrorMessage}>{errors.password}</span>
              )}
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
              <button
                disabled={isSubmitting}
                type="submit"
                className={styles.Button}
              >
                Login
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
