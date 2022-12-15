import React from "react";
import TaskUnit from "../TaskUnit/TaskUnit";

const Tasklist = (props) => {
  return (
    <ul>
      {props.items.map((goal) => {
        return (
          <TaskUnit key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
            {goal.title}
          </TaskUnit>
        );
      })}
    </ul>
  );
};

export default Tasklist;
