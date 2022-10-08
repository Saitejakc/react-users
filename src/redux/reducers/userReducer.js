const STATE = {
  user: {
    items: [
      {
        id: "soos4XI81",
        name: "testone",
        email: "demo@gmail.com",
        phone: "7204402437",
      },
      {
        id: "FGSCwbqa2",
        name: "test2",
        email: "test@gmail.com",
        phone: "7205502437",
      },
    ],

  },
  userToEdit: {}
};

const userReducer = (state = STATE, action) => {
  switch (action.type) {
    case "ADD_USER":

      const index = state.user.items.findIndex(item => item.id === action.payload.id);

      if (index > -1) {
        const newItems = [...state.user.items];
        newItems[index] = action.payload;
        return {
          ...state,
          user: {
            items: newItems
          }
        }
      } else {
        return {
          ...state,
          user: {
            items: [...state.user.items, action.payload]
          }
        }
      }

    case "DELETE_USER":
      return {
        ...state,
        user: {
          items: state.user.items.filter((user) => user.id !== action.payload)
        }
      };

    case "EDIT_USER":
      return {
        ...state,
        userToEdit: action.payload
      }

    default:
      return state;
  }
};

export default userReducer;
