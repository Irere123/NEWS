import Link from "next/link";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import { Form, Formik, replace } from "formik";
import { useRouter } from "next/router";

import styles from "../../styles/Registration.module.css";
import { useRegisterMutation } from "../../generated/graphql";
import { toErrorMap } from "../../lib/toErrorMap";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [register] = useRegisterMutation();
  const router = useRouter();

  return (
    <Formik<FormValues>
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await register({
          variables: { input: values },
          update: (store, { data }) => {},
        });

        if (response.data?.register.errors) {
          setErrors(toErrorMap(response.data.register.errors));
        }

        if (response.data?.register.ok) {
          router.push("/home");
        }
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className={styles.RegisterForm}>
            <div>
              <label className={styles.InputLabel}>Username</label>
              <div className={styles.InputField}>
                <span>
                  <PersonOutlined />
                </span>
                <input
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  name="username"
                />
              </div>
              {errors ? (
                <span className={styles.ErrorMessage}>{errors.username}</span>
              ) : null}
            </div>
            <div>
              <label className={styles.InputLabel}>Email</label>
              <div className={styles.InputField}>
                <span>
                  <EmailOutlined />
                </span>
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              {errors ? (
                <span className={styles.ErrorMessage}>{errors.email}</span>
              ) : null}
            </div>
            <div>
              <label className={styles.InputLabel}>Password</label>
              <div className={styles.InputField}>
                <span>
                  <LockOutlined />
                </span>
                <input
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>
              {errors ? (
                <span className={styles.ErrorMessage}>{errors.password}</span>
              ) : null}
            </div>
            <div className={styles.LoginFormLinks}>
              <Link href="/login">
                <a>Already have account ?</a>
              </Link>
            </div>
            <div className={styles.ButtonContainer}>
              <button
                disabled={isSubmitting}
                type="submit"
                className={styles.Button}
              >
                Sign Up
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
