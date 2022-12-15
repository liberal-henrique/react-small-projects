import React from "react";

const TaskUnit = (props) => {
  console.log(props);
  return (
    <li>
      {props.children}
      
    </li>
  );
};

export default TaskUnit;
