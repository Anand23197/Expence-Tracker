import React from 'react'
import "./sidebar.scss"
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
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
                <span className='logo'>AnandADMIN</span>
        </Link>
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
          <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
          </Link>
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
        <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar