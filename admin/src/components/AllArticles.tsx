import React from "react";

import { Card } from "../ui";

export const Articles: React.FC = () => {
  return (
    <div className="ArticlesPage__allArticles">
      <Card height="200" width="500">
        <h2>Article</h2>
      </Card>
      <Card height="200" width="500">
        <h2>Article</h2>
      </Card>
      <Card height="200" width="500">
        <h2>Article</h2>
      </Card>
    </div>
  );
};
