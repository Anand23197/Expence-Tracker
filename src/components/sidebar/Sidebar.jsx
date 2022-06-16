import React from 'react'
import "./sidebar.scss"
import { MdDashboard, MdAdminPanelSettings } from "react-icons/md";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>anand</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <li>
            <DashboardOutlinedIcon/>
            <span>DashBoard</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon/>
            <span>Users</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Delivery</span>
          </li>
          <li>
            <span>Stats</span>
          </li>
          <li>
            <span>Notification</span>
          </li>
          <li>
            <span>System Health</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>color Options</div>
    </div>
  )
}

export default Sidebar