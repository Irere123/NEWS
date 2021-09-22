import Head from "next/head";

import { useHelloQuery } from "../generated/graphql";

export default function Chat() {
  const { data, loading } = useHelloQuery();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Head>
        <title>Chat - NEWS</title>
      </Head>
      <h1>{data?.hello}</h1>
    </div>
  );
}
