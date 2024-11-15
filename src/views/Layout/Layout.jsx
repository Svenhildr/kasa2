import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Layout.scss";

export default function Layout() {
    return (
        <>
            <Header />
            <div className="outlet">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
//
