import React from "react";
import TaskUnit from "./TaskUnit";

const Tasklist = (props) => {
  return (
    <ul>
      {props.items.map((goal) => {
        return (
          <TaskUnit
            key={goal.id}
            id={goal.id}
          >
            {goal.title}
          </TaskUnit>
        );
      })}
    </ul>
  );
};

export default Tasklist;
