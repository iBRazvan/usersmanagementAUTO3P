import React from "react";
import moment from "moment";

import { Typography, Card, CardContent, Box } from "@mui/material";

const User = ({ user }) => {
  return (
    <>
      <Card
        className="flex flex-col justify-between rounded-2xl h-full relative "
        style={{ backgroundColor: "var(--secondary-sun-color)" }}
      >
        <CardContent>
          <Box className="flex flex-row justify-between">
            <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
              First Name: {user.firstName}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
              Last Name: {user.lastName}
            </Typography>
          </Box>

          <Typography variant="h6" component="div" color="white">
            Username: {user.username}
          </Typography>
          <Typography variant="h6" component="div" color="white">
            Email: {user.email}
          </Typography>
          <Typography variant="body2" className="text-end" color="black">
            Date of birth: {moment(user.dateOfBirth).format("DD/MM/YYYY")}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default User;
