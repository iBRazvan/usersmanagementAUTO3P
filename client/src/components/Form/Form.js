import React from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import styles from "../../styles/Form.module.css";
import stylesTitle from "../../styles/Sidebar.module.css";
import { formValidate } from "../../helper/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../../actions/users";
import { Typography } from "@mui/material";

const Form = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      username: "",
      email: "",
    },
    validate: formValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const user = values;

      dispatch(addUser(user));
    },
  });

  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <Typography className={stylesTitle.sidebar_title}>
        ADD A NEW USER
      </Typography>

      <form className="textbox" onSubmit={formik.handleSubmit}>
        <div className="profile flex flex-col justify-center items-center py-4 gap-4">
          <input
            {...formik.getFieldProps("firstName")}
            type="text"
            placeholder="First Name"
            className={styles.textbox}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <input
            {...formik.getFieldProps("lastName")}
            type="text"
            placeholder="Last Name"
            className={styles.textbox}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <input
            {...formik.getFieldProps("dateOfBirth")}
            type="date"
            placeholder="Date of Birth"
            className={styles.textbox}
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />
          <input
            {...formik.getFieldProps("username")}
            type="text"
            placeholder="Username"
            className={styles.textbox}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <input
            {...formik.getFieldProps("email")}
            type="text"
            placeholder="Email"
            className={styles.textbox}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit" className={styles.btn}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
