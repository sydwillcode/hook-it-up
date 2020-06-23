import React, { useState, useEffect, Fragment } from "react";
import {Link} from 'react-router-dom'


const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return users.map((user) => {
    return (
      <Fragment key={user.id}>
        <h3>{user.name}</h3>
        <Link to={`/users/${user.id}/details`}>
            <button className="btn btn-sm btn-info">See Details</button>
        </Link>
      </Fragment>
    );
  });
};

export default Users;
