import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authData } from "../../core/slices/authSlice.js";
import { setAuthUser, setUser } from "../../core/slices/userSlice.js";
import { profileUser } from "../../shared/services/userApiCalls.js";

export const Profile = () => {
  const navigate = useNavigate();
  const { token } = useSelector(authData);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState("");

  const fetchProfileData = async () => {
    try {
      const response = await profileUser(token);
      setUserData(response.data);
      dispatch(setAuthUser(response.data.authUser));
      dispatch(setUser(response.data.user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [token]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.authUser.name}</h1>
          <p>Email: {userData.authUser.email}</p>
          <p>Teléfono: {userData.user.phone}</p>
          <p>Dirección: {userData.user.adress}</p>
        </div>
      ) : (
        <p>No hay user</p>
      )}
    </div>
  );
};
