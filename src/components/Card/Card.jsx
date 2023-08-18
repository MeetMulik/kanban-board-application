import React from "react";
import "./Card.css";
import { useStateValue } from "../../context/StateProvider";
import { MdOutlineSpeakerNotes, MdPersonPin } from "react-icons/md";
import {
  TbAntennaBars1,
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
} from "react-icons/tb";

import { VscCircleFilled } from "react-icons/vsc";
import { TbCircleDotted } from "react-icons/tb";
import { GoStack } from "react-icons/go";

// const priority = ["Urgent", "High", "Medium", "Low", "No Priority"];
const priorityIcons = [
  <TbAntennaBars5 />,
  <TbAntennaBars4 />,
  <TbAntennaBars3 />,
  <TbAntennaBars2 />,
  <TbAntennaBars1 />,
];

const statusIcons = {
  "In progress": <TbCircleDotted />,
  Todo: <MdOutlineSpeakerNotes />,
  Backlog: <GoStack />,
};

const Card = ({ id, userId, title, status, priority, tag }) => {
  const [state, dispatch] = useStateValue();
  const users = state.users;

  const usersMap = new Map();
  users.forEach((user) => {
    usersMap.set(user.id, user.name);
  });

  return (
    <div className="card">
      <div className="card-top">
        <span id="ticket-id">{id}</span>
        <div className="user-box">
          <MdPersonPin id="person-icon" />
          <span id="usr-id">{usersMap.get(userId)}</span>
        </div>
      </div>
      <div className="card-mid">
        <div className="title-header">
          <span id="status-icon">{statusIcons[status]}</span>
          <span>{"  "}</span>
          <span id="title">
            {title.length > 58 ? title.substr(0, 50) + ".." : title}
          </span>
        </div>
      </div>
      <div className="card-bottom"></div>
      <div>
        <div className="priority-box">
          <span id="priority-icon">{priorityIcons[priority]}</span>
          <div>
            <div id="tag">
              {" "}
              <VscCircleFilled />
              {tag[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
