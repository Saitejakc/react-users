import React from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/allAction";
import { editUser } from "../../redux/allAction";

function List({ user }) {
  const dispatch = useDispatch();
  const { name, email, phone, id } = user;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button id="btn-update" onClick={() => dispatch(editUser(user))}>
          Edit
        </button>

        <button id="btn-delete" onClick={() => dispatch(deleteUser(id))}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default List;
