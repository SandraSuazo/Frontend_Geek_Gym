import axios from "axios";

const userURL = "http://localhost:3000/user";

export const profileUser = async (token) => {
  const result = await axios.get(`${userURL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
};

export const modifyProfileUser = async (updatedData, token) => {
  const result = await axios.patch(`${userURL}/update-profile`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
};
