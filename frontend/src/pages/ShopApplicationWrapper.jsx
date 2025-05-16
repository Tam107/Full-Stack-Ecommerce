import React from 'react'
import Navigation from "../components/Navigation/Navigation";
import {Outlet} from "react-router-dom";

const ShopApplicationWrapper = () => {
    return (
        <>
        <Navigation/>
            <Outlet/>
        </>
    )
}
export default ShopApplicationWrapper
