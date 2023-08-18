import React, { useEffect, useState } from "react";
import "./App.css";

import { MdArrowDropDown } from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";

const App = () => {
  //setting the data using useState
  const [data, setData] = useState([]);

  const [ticketsarr, setTickets] = useState([]);
  const [usersarr, setUsers] = useState([]);

  const [dropdown, setDropdown] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await response.json();
    setData(data);
    setTickets(data.tickets);
    setUsers(data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="body"></div>
    </div>
  );
};

export default App;
