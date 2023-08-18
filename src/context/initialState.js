export const initialState = {
  tickets: [],
  users: [],
  grouping:
    localStorage.getItem("grouping") !== null
      ? localStorage.getItem("grouping")
      : "status",
  sorting:
    localStorage.getItem("sorting") !== null
      ? localStorage.getItem("sorting")
      : "priority",
};
