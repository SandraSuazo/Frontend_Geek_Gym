import axios from "axios";

const authURL = "http://localhost:3000";

export const login = async (user) => {
  const result = await axios.post(`${authURL}/login`, user);
  return result;
};
