import React from "react";
import Form from "../Form/Form";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = ({ toggleContainer }) => {
  return (
    <div
      className={styles.sidebar_slider}
      style={{
        left: toggleContainer ? "0%" : "-100%",
      }}
    >
      <Form />
    </div>
  );
};

export default Sidebar;
