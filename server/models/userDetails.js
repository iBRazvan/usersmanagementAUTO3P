import mongoose from "mongoose";

// User backend schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  username: String,
  email: String,
});

const UserDetails = mongoose.model("UserDetails", userSchema);

export default UserDetails;
