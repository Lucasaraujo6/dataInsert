import { Link, useNavigate } from "react-router-dom";
import { usePageActive } from "../../../hooks";
// import Images from "../../../../assets";
import styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();
  const isPageActive = usePageActive();
  return (
    <div className={styles.header_container}>
      <div
        className={[
          styles.header_option,
          !isPageActive && styles.option_selected,
        ].join(" ")}
        onClick={() => navigate("/view")}
      >
        Ver todos
      </div>
      <div
        className={[
          styles.header_option,
          isPageActive && styles.option_selected,
        ].join(" ")}
        onClick={() => navigate("/insert")}
      >
        Adicionar
      </div>
    </div>
  );
}

export default Header;
