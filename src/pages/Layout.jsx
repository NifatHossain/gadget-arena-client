import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import FooterPart from '../components/FooterPart';

const Layout = () => {
    return (
        <div className='roboto-font max-w-7xl mx-auto'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <FooterPart></FooterPart>
        </div>
    );
};

export default Layout;