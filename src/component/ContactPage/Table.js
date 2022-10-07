import React from "react";
import "../ContactPage/Content.css";
import List from "./List";
import { useSelector } from "react-redux";

function Table() {
  const userList = useSelector((state) => {
    // console.log(state);
    return state.user.items;
  });
  // const userList = [{ id: 1, name: "test" }];
  return (
    <div id="table">
      <h2>DETAILS</h2>
      <table id="display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((userData) => (
            <List user={userData} key={userData.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
