import React from "react";
import { Card } from "../ui";

export const LatestArticles: React.FC = () => {
  return (
    <div className="ArticlesPage__latest">
      <Card height="200" width="500">
        <h2>Latest</h2>
      </Card>
      <Card height="200" width="500">
        <h2>Latest</h2>
      </Card>
    </div>
  );
};
