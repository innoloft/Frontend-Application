import styles from "./styles";
import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }) {
    return (
        <div style={styles.root}>
            <Header />
            <div style={styles.container}>
                <SideBar />
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout;
