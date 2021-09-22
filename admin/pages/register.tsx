import Head from "next/head";

function Register() {
  return (
    <div className="flex items-center justify-center grid-cols-2">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create Account - NEWS</title>
      </Head>
      <div>
        <div className=" bg-white shadow">
          <h1>Register Account</h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
