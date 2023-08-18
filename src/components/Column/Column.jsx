import React from "react";
import "./Column.css";
import Card from "../Card/Card";
import { useStateValue } from "../../context/StateProvider";

import { FcHighPriority } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import { RxBorderDotted } from "react-icons/rx";

import {
  TbAntennaBars1,
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
  TbCircleDotted,
} from "react-icons/tb";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { GoStack } from "react-icons/go";

const priority = [
  ["Urgent", <FcHighPriority />],
  ["High", <TbAntennaBars4 />],
  ["Medium", <TbAntennaBars3 />],
  ["Low", <TbAntennaBars2 />],
  ["No Priority", <TbAntennaBars1 />],
];

const Column = ({ title, ticketsarray }) => {
  const [state, dispatch] = useStateValue();
  const users = state.users;

  const usersMap = new Map();
  users.forEach((user) => {
    usersMap.set(user.id, user.name);
  });

  const statusIcons = {
    "In progress": <TbCircleDotted />,
    Todo: <MdOutlineSpeakerNotes />,
    Backlog: <GoStack />,
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          <h2>
            {state.grouping === "status" ? (
              <div className="column-text">
                <span>{statusIcons[title]}</span>
                <span>{title}</span>
              </div>
            ) : state.grouping === "priority" ? (
              <div id="header-box">
                {priority[title][1]}
                {priority[title][0]}
              </div>
            ) : state.grouping === "userId" ? (
              usersMap.get(title)
            ) : (
              ""
            )}
          </h2>
          <h2 id="tickets-size">{ticketsarray.length}</h2>
        </div>
        <div>
          <span id="add-icon">
            <AiOutlinePlus />
            <RxBorderDotted />
          </span>
        </div>
      </div>
      {ticketsarray?.map((ticket) => {
        return (
          <div className="ticket">
            <Card {...ticket} />
          </div>
        );
      })}
    </div>
  );
};

export default Column;
