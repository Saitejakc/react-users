const STATE = {
  user: {
    items: [
      {
        id: 1,
        name: "test1",
        email: "demo@gmail.com",
        phone: "7204402437",
      },
      {
        id: 2,
        name: "test2",
        email: "test@gmail.com",
        phone: "7205502437",
      },
    ],
  },

  tableData: {},
};

const userReducer = (state = STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "DELETE_USER":
      return {
        ...state,
        items: state.items.filter((user) => user.id !== action.payload),
      };

    case "EDIT_USER":
      return {};

    default:
      return state;
  }
};

export default userReducer;
