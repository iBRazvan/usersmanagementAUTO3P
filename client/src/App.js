import React, { useEffect, useState } from "react";
import { Container, Grow } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersList from "./components/UsersList/UsersList";
import { useDispatch } from "react-redux";
import { getUsers } from "./actions/users";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import styles from "./styles/App.module.css";

const App = () => {
  const [toggleContainer, setToggleContainer] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" style={{ overflow: "hidden" }}>
      <Sidebar toggleContainer={toggleContainer} />
      {!toggleContainer ? (
        <MenuIcon
          className={styles.menu_icon}
          onClick={() =>
            setToggleContainer((prevToggleContainer) => !prevToggleContainer)
          }
        />
      ) : (
        <MenuOpenIcon
          className={styles.menu_icon}
          onClick={() =>
            setToggleContainer((prevToggleContainer) => !prevToggleContainer)
          }
        />
      )}

      <Grow in>
        <Container className={styles.app_container}>
          <UsersList />
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
