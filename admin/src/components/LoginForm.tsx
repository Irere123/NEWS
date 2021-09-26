import { LockOutlined, PersonOutlined } from "@mui/icons-material";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

import "../ui/styles/Register&Login.css";
import { Button } from "../ui";

interface FormValues {
  username: string;
  password: string;
}

function LoginForm() {
  return (
    <Formik<FormValues>
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className="RegisterForm">
            <div>
              <label>Username</label>
              <div className="InputField">
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
                <span className="ErrorMessage">{errors.username}</span>
              ) : null}
            </div>

            <div>
              <label>Password</label>
              <div className="InputField">
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
              <Link to="/register">Create new account</Link>
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
}

export default LoginForm;
