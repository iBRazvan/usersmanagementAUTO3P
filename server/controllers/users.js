import UserDetails from "../models/userDetails.js";

// This is the controller that is able for getting users
export const getUsers = async (req, res) => {
  try {
    const userDetails = await UserDetails.find();
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// This is the controller that is able for adding users
export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserDetails(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
