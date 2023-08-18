import React, { useEffect, useState } from "react";
import "./App.css";

import { MdArrowDropDown } from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import { useStateValue } from "./context/StateProvider";
import Card from "./components/Card/Card";
import Column from "./components/Column/Column";

const App = () => {
  const [ticketsarr, setTickets] = useState([]);
  const [usersarr, setUsers] = useState([]);

  const [dropdown, setDropdown] = useState(true);

  const [state, dispatch] = useStateValue();

  const fetchData = async () => {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await response.json();
    setTickets(data.tickets);
    setUsers(data.users);
    dispatch({
      type: "SET_USERS",
      users: data.users,
    });
    dispatch({
      type: "SET_TICKETS",
      tickets: data.tickets,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const groupBy = (key, array) => {
    return array.reduce((acc, currentValue) => {
      const keyy = currentValue[key];
      acc[keyy] = acc[keyy] || [];
      acc[keyy].push(currentValue);
      return acc;
    }, {});
  };

  const groupedItems = groupBy(state.grouping, ticketsarr);

  const sortingItems = (grouped) => {
    const sortedGroups = {};
    for (const groupKey in grouped) {
      const groupTickets = grouped[groupKey].slice();
      sortedGroups[groupKey] = groupTickets.sort((a, b) => {
        if (state.sorting === "priority") {
          return b.priority - a.priority;
        } else if (state.sorting === "title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }
    return sortedGroups;
  };

  const sortedGroupedItems = sortingItems(groupedItems);

  const toggleDropdown = (e) => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <div className="navbar">
        <div className="dropbox">
          <div className="displayalign" onClick={toggleDropdown}>
            <RiListSettingsFill />
            <span id="displayt">Display</span>
            <span className="dicon">
              <MdArrowDropDown />
            </span>
          </div>
          {dropdown && <DropDownMenu />}
        </div>
      </div>
      <div className="body">
        {Object.keys(sortedGroupedItems).map((title) => {
          return (
            <Column
              title={title}
              ticketsarray={sortedGroupedItems[title]}
              key={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
