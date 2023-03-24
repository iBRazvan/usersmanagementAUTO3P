import React from "react";
import User from "./User/User";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

const UsersList = () => {
  const users = useSelector((state) => state.users);

  return !users.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      alignItems="stretch"
      spacing={3}
      className="flex items-center"
    >
      {users.map((user) => (
        <Grid key={user._id} item xs={12} sm={6}>
          <User user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersList;
