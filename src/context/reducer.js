export const actionTypes = {
  SET_TICKETS: "SET_TICKETS",
  SET_USERS: "SET_USERS",
  SET_GROUPING: "SET_GROUPING",
  SET_SORTING: "SET_SORTING",
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
    case actionTypes.SET_GROUPING:
      return {
        ...state,
        grouping: action.grouping,
      };
    case actionTypes.SET_SORTING:
      return {
        ...state,
        sorting: action.sorting,
      };
    default:
      return state;
  }
};

export default reducer;
