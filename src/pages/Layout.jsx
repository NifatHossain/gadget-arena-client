import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='roboto-font max-w-7xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;