import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import {Outlet} from 'react-router-dom';

const ShopApplicationWrapper = () => {
    return (
        <div className="w-screen min-h-screen md:w-screen flex flex-col">
            <Navigation/>
            <main className="w-full flex-1">
                <Outlet/>
            </main>
        </div>
    );
};

export default ShopApplicationWrapper;