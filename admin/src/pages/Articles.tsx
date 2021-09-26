import React from "react";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

import "../ui/styles/Articles.css";
import { Button } from "../ui";
import { LatestArticles } from "../components/LatestArticles";
import { Articles as AllArticles } from "../components/AllArticles";

const Articles: React.FC = () => {
  return (
    <div className="ArticlesPage">
      <h2>NEWS Articles</h2>
      <main>
        <a href="/compose">
          <Button type="button" variant="rounded" borderSize={2}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AddCircleOutlineOutlined />
            </span>
            Compose
          </Button>
        </a>
        <div className="ArticlesPage__CategoryButtons">
          <Button type="button" borderSize={2} size="small" fontSize="15">
            BUSINESS
          </Button>
          <Button type="button" borderSize={2} size="small" fontSize="15">
            TECH
          </Button>
          <Button type="button" borderSize={2} size="small" fontSize="15">
            POLITICS
          </Button>
        </div>
        <div>
          <h2>Latest</h2>
          <LatestArticles />
        </div>
        <div>
          <h2>Articles</h2>
          <AllArticles />
        </div>
      </main>
    </div>
  );
};
export default Articles;
