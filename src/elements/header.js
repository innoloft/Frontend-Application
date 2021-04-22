import logo from './logo.svg';

function Header() {
    return(
        <div id="header-wrapper">
            <div id="header">
                <img src={logo} alt=""id="logo"></img>
            </div>
        </div>
    );
}

export default Header;

