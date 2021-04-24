import React, { Fragment, useEffect } from 'react';
import Header from './header';
import Navbar from './navbar';
import { connect } from 'react-redux';
import { getConfigurationState } from '../redux/action/index';

let headerStyle = "";

const Layout = props => {  
    
    const toggleNavbar = () => {
        const navbar = document.querySelector('.sidebar');
        const navbarOverlay = document.querySelector('.sidebar-overlay');
        
        navbar.classList.toggle('show-navbar');
        navbarOverlay.classList.toggle('sidebar-show-overloay');
    }
  
    const updateWidthAndHeight = () => {
      const innerWidth = window.innerWidth;
      const navbar = document.querySelector('.sidebar');
      const navbarOverlay = document.querySelector('.sidebar-overlay');
      const classExist = navbar.classList.contains('show-navbar');

      if(innerWidth > 1024){
        if(classExist){
            navbar.classList.toggle('show-navbar');
            navbarOverlay.classList.toggle('sidebar-show-overloay');
        }
      }
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);

    return (
        <Fragment>
            <div className="grid-container">
        
                {/* HEADER STARTS HERE */}
                <header className="header-section" style={{background: `${headerStyle}`}}>
                    <Header toggle={toggleNavbar} />
                </header>
                {/* / HEADER ENDS HERE */}

        
                {/* MAIN CONTENT STARTS HERE */}
                <main className="main-section">
                    <div className="sidebar-overlay" onClick={()=>toggleNavbar()}></div>
                    <div className="sidebar">
                        <Navbar />
                    </div>
                    <div className="main-container">
                        <props.content />
                    </div>
                </main>
                {/* MAIN CONTENT ENDS HERE */}

            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    headerStyle = (state.configuration && state.configuration.mainColor)? state.configuration.mainColor: '';
    return {
        configurations: getConfigurationState(state),
    }
};

// export default index;
export default connect(mapStateToProps, null)(Layout);