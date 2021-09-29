import React from "react";

import "../ui/styles/Home.css";
import { Card } from "../ui";
import { Sidebar } from "../components/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="HomePage__layoutContainer">
      <Sidebar />
      <div className="HomePage__layout">
        <h2>Your Feed</h2>
        <main className="CardsHome">
          <Card height="460" width="430">
            <h1>profile</h1>
          </Card>
          <div className="MiddleCards">
            <Card height="200" width="400">
              <h1>Breaking</h1>
            </Card>
            <Card height="200" width="400">
              <h1>Social</h1>
            </Card>
          </div>
          <Card height="460" width="450">
            <h1>Top story</h1>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Home;
