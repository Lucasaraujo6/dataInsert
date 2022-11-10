import { Outlet } from "react-router-dom";

// Componentes
import { Header } from "./components";

// Styles
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout_container}>
      <div className={styles.layout_container_content}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
