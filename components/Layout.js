import React from 'react';
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <div className='content'>
            <Head>
                <title>frontend-app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopBar/>
           <div className='container'>
               <NavBar/>   {children}
           </div>



        </div>
    );
};

export default Layout;
