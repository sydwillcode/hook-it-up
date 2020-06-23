import React, { useState, useEffect } from "react";

const UserDetail = (props) => {
  const { match } = props;
  let { id } = match.params;

  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let details = await res.json();
    setDetails(details);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <h3>{details.username}</h3>
      <h6>{details.email}</h6>
      <p>{details.phone}</p>
    </>
  );
};

export default UserDetail;
