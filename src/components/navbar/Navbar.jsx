import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder='search..' />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
         <div className="item">
         <LanguageOutlinedIcon className='icon'/>
          English
         </div>
         <div className='item'>
          <DarkModeOutlinedIcon className='icon'/>
         </div>
         <div className='item'>
          <FullscreenOutlinedIcon className='icon'/>
         </div>
         <div className='item'>
          <NotificationsNoneOutlinedIcon className='icon'/>
          <div className='counter'>1</div>
         </div>
         <div className='item'>
          <ChatBubbleOutlinedIcon className='icon'/>
          <div className='counter'>2</div>
         </div>
         <div className='item'>
          <FormatListBulletedOutlinedIcon className='icon'/>
         </div>
          <div className='item'>
            <img src= 'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg'
            alt=""
            className='avatar'
            />
          </div>       
      </div>
      </div>
    </div>
  )
}

export default Navbar