import react, { useState } from 'react';
import "./Navbar.css";
import 'font-awesome/css/font-awesome.min.css';

import { MenuList } from './MenuList';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
        const [clicked, setClicked] = useState(false);

        const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <NavLink to={url} activeClassName="active">
                    {title}
                    </NavLink>
            </li>
        );    
        });
        const handleClick = () => {
            setClicked(!clicked);
        };
    return(
        <nav>
            <div className="logo">
                Blue Sky<font> Navigation</font>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={ clicked ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menuList}</ul>
        </nav>
    );
};

export default Navbar;