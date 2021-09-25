import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HomeOutlined,
  MapOutlined,
  BarChartOutlined,
  LibraryBooksOutlined,
  ForumOutlined,
} from "@mui/icons-material";

import pic from "../public/irere.jpg";

export const Sidebar: React.FC = () => {
  return (
    <>
      <div className="sidebarAvatar">
        <Image className="image" src={pic} alt="Profile Picture" />
      </div>
      <div className="sidebarIcons">
        <Link href="/home">
          <a>
            <HomeOutlined />
          </a>
        </Link>

        <Link href="/articles">
          <a>
            <LibraryBooksOutlined />
          </a>
        </Link>
        <Link href="/chat">
          <a>
            <ForumOutlined />
          </a>
        </Link>
        <Link href="/stats">
          <a>
            <BarChartOutlined />
          </a>
        </Link>
        <Link href="/maps">
          <a>
            <MapOutlined />
          </a>
        </Link>
      </div>
    </>
  );
};
