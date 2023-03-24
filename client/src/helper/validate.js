import toast from "react-hot-toast";
// validate form
export const formValidate = async (values) => {
  const errors = firstNameVerify({}, values);
  lastNameVerify(errors, values);
  dateOfBirthVerify(errors, values);
  usernameVerify(errors, values);
  emailVerify(errors, values);
  return errors;
};

// Validation for First Name
const firstNameVerify = (error = {}, values) => {
  if (!values.firstName) {
    error.firstName = toast.error("First name is required!");
  } else if (values.firstName.includes(" ")) {
    error.firstName = toast.error("Invalid first name");
  }

  return error;
};

// Validation for Last Name
const lastNameVerify = (error = {}, values) => {
  if (!values.lastName) {
    error.lastName = toast.error("Last name is required!");
  } else if (values.lastName.includes(" ")) {
    error.lastName = toast.error("Invalid last name");
  }

  return error;
};
// Validation for DateOfBirth
const dateOfBirthVerify = (error = {}, values) => {
  if (!values.dateOfBirth) {
    error.dateOfBirth = toast.error("Date of Birth is required!");
  } else if (values.dateOfBirth.includes(" ")) {
    error.dateOfBirth = toast.error("Date of Birth is invalid");
  }

  return error;
};

// Validation for Username
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username is required!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid username");
  } else if (
    values.username.toLowerCase() === values.firstName.toLowerCase() ||
    values.username.toLowerCase() === values.lastName.toLowerCase()
  ) {
    error.username = toast.error(
      "Username should not be the same like your First name or Last name"
    );
  }

  return error;
};

// Validation for Email
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email required!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong email!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address!");
  }

  return error;
}
