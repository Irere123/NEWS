import React from "react";
import {
  BarChartOutlined,
  HomeOutlined,
  LibraryBooksOutlined,
  ForumOutlined,
  MapOutlined,
} from "@mui/icons-material";

import pic from "../assets/irere.jpg";
import { Link } from "react-router-dom";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
  return (
    <>
      <div className="AppLayout__sidebarAvatar">
        <img className="image" src={pic} alt="User Profile" />
      </div>
      <div className="AppLayout__sidebarIcons">
        <Link to="/">
          <HomeOutlined />
        </Link>
        <Link to="/articles">
          <LibraryBooksOutlined />
        </Link>
        <Link to="/chat">
          <ForumOutlined />
        </Link>
        <Link to="/statistics">
          <BarChartOutlined />
        </Link>
        <Link to="/maps">
          <MapOutlined />
        </Link>
      </div>
    </>
  );
};
