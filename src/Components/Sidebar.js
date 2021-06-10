import React from "react";
import "../App.css";
import header_sidebar from "../images/header_sidebar.jpeg";
import footer_sidebar from "../images/footer_sidebar.jpeg";
import "./Sidebar.css";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Typography } from "@material-ui/core";


function Sidebar() {
  return (
    <div className="Sidebar">
      <i>
        <img className="header" src={header_sidebar} />
      </i>
      <ul className="SidebarList">
        <MenuItem>
          <MenuItem >
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body1"> Painel</Typography>
          </MenuItem>
        </MenuItem>

        <MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit"> Configuração</Typography>
          </MenuItem>
        </MenuItem>
      </ul>

      <i>
        <img className="footer" src={footer_sidebar} />
      </i>
    </div>
  );
}

export default Sidebar;
