import React from 'react';
import logo from '../assets/images/InGelt-logo.png'

const Navbar = () => {
    return (
        <div className='bg-[#051C45] h-[100px] flex items-center px-5 lg:px-36'>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Navbar;