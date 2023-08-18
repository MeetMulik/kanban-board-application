import React, { useState } from "react";
import "./DropDownMenu.css";

const DropDownMenu = () => {
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
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
                value={grouping}
                onChange={handleGroupingChange}
                className="select-box"
              >
                <option value="user">User</option>
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
                value={sorting}
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
