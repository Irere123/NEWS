import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import { Form, Formik } from "formik";
import { Link, withRouter } from "react-router-dom";

import "../ui/styles/Register&Login.css";
import { Button } from "../ui";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = withRouter(({ history }) => {
  const [login] = useLoginMutation();

  return (
    <Formik<FormValues>
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await login({
          variables: values,
          update: (store, { data }) => {
            store.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                __typename: "Query",
                me: data?.login?.user,
              },
            });
          },
        });

        if (response.data?.login?.errors) {
          setErrors(toErrorMap(response.data.login.errors!));
          return;
        }

        history.push("/home");
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className="RegisterForm">
            <div>
              <label>Email</label>
              <div className="InputField">
                <span>
                  <EmailOutlined />
                </span>
                <input
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              {errors ? (
                <span className="ErrorMessage">{errors.email}</span>
              ) : null}
            </div>

            <div>
              <label>Password</label>
              <div className="InputField ">
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
                <span className="ErrorMessage">{errors.password}</span>
              ) : null}
            </div>
            <div className="LoginFormLinks">
              <Link to="/">Create new account</Link>
            </div>

            <div className="ButtonContainer">
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="rounded"
                size="medium"
                borderSize={2}
                colorText="#fff"
                backgroundColor="#000"
              >
                Login
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
});

export default LoginForm;
