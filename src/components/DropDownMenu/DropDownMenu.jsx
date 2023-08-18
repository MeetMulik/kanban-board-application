import React, { useState } from "react";
import "./DropDownMenu.css";
import { useStateValue } from "../../../src/context/StateProvider";
import { actionTypes } from "../../context/reducer";

const DropDownMenu = () => {
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  const [state, dispatch] = useStateValue();

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
    dispatch({
      type: actionTypes.SET_SORTING,
      sorting: e.target.value,
    });
    localStorage.setItem("sorting", e.target.value);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
    dispatch({
      type: actionTypes.SET_GROUPING,
      grouping: e.target.value,
    });
    localStorage.setItem("grouping", e.target.value);
  };

  return (
    <div className="ddown">
      <ul className="ddownlist">
        <li className="listitem">
          <div className="select-container">
            <div className="grouping">
              <label htmlFor="status-select">Grouping: </label>
              <select
                id="status-select"
                value={state.grouping}
                onChange={handleGroupingChange}
                className="select-box"
              >
                <option value="userId">User</option>
                <option value="status">Status</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
        </li>
        <li className="listitem">
          <div className="select-container">
            <div className="sorting">
              <label htmlFor="option-select">Sorting: </label>
              <select
                id="option-select"
                value={state.sorting}
                onChange={handleSortingChange}
                className="select-box"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
