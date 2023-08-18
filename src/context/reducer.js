export const actionTypes = {
  SET_TICKETS: "SET_TICKETS",
  SET_USERS: "SET_USERS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default reducer;
