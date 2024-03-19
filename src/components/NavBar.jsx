import React from "react";
import { LeftOutline, UserCircleOutline } from 'antd-mobile-icons';
import './NavBar.less';

function NavBar() {
    return <div className="navbar-box">
        <span><LeftOutline /></span>
        <span>VIP中心</span>
        <span><UserCircleOutline /></span> 
    </div>
}
export default NavBar;