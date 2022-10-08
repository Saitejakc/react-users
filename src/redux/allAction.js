export const userRegister = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
export const editUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};

