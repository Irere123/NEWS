import React, { useState } from "react";
import { AppsOutlined, NotificationsOutlined } from "@mui/icons-material";

import { More } from "./dropdowns/More";
import { Notifications } from "./dropdowns/Notifications";

export const Header: React.FC = () => {
  const [openMore, setOpenMore] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <div className="mainLayout_header_icons">
      <span onClick={() => setOpenNotifications(!openNotifications)}>
        <NotificationsOutlined />
      </span>
      <span onClick={() => setOpenMore(!openMore)}>
        <AppsOutlined />
      </span>
      {openMore && <More />}
      {openNotifications && <Notifications />}
    </div>
  );
};
