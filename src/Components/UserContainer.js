import React, { useEffect } from "react";
import { fetchUsers } from "../Redux";
import { useSelector, useDispatch } from "react-redux";

const UserContainer = () => {
  const usersData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container">
      <h1 className="title">Fetch Users List Redux using Hooks</h1>
      <div className="devider" />
      {usersData.loading && "Loading..."}
      {usersData.error && <p>usersData.error</p>}
      <div>
        <h2>User list</h2>
        <div>
          {usersData?.users?.map((user, index) => (
            <p>{user.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
