import React, { Component } from 'react';
import './Sidebar.css';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarOption from '../../Components/SidebarOption/SidebarOption';
import { Button } from '@material-ui/core';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <TwitterIcon id="twitter_icon" style={{color: "#50b7f5"}}/>
                <SidebarOption active text="Home" Icon={HomeIcon} />
                <SidebarOption text="Explore" Icon={SearchIcon} />
                <SidebarOption text="Notifications" Icon={NotificationNoneIcon} />
                <SidebarOption text="Messages" Icon={MailOutlineIcon} />
                <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
                <SidebarOption text="Lists" Icon={ListAltIcon} />
                <SidebarOption text="Profile" Icon={PermIdentityIcon} />
                <SidebarOption text="More" Icon={MoreHorizIcon} />
                <Button variant="outlined" className="siderbar__tweetButton" >Tweet</Button>
            </div>
        )
    }
};

export default Sidebar;