import React from "react";
import { useRouter, NextRouter } from "next/router";

import { useMeQuery } from "../generated/graphql";

export const Header: React.FC = () => {
  const { data, loading } = useMeQuery();
  const router: NextRouter = useRouter();
  let body = null;

  if (loading) {
    return null;
  } else if (!data?.me) {
    router.push("/register");
  } else {
    return null;
  }

  return <div className="mainLayout_header_icons">{body}</div>;
};
