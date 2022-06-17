import React from 'react'
import "./sidebar.scss"
import { MdDashboard, MdAdminPanelSettings } from "react-icons/md";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import AddCardSharpIcon from '@mui/icons-material/AddCardSharp';
import AirportShuttleSharpIcon from '@mui/icons-material/AirportShuttleSharp';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>anand</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardOutlinedIcon className='icon'/>
            <span>DashBoard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <AddCardSharpIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <AirportShuttleSharpIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <BarChartOutlinedIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className='icon'/>
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <HealthAndSafetyOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountBoxOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar