import React from "react";
import { useHelloQuery } from "../generated/graphql";

const Maps: React.FC = () => {
  const { data, loading, error } = useHelloQuery();

  if (loading) {
    return <div>loading...</div>;
  } else if (error) {
    return (
      <div>
        <h2>There was something wrong :( {error.message}</h2>
      </div>
    );
  }

  return (
    <div>
      <main>
        <h1>{data?.hello}</h1>
      </main>
    </div>
  );
};

export default Maps;
