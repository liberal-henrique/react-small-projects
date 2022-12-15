import React from "react";

const TaskUnit = (props) => {
  const onHandlerDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <li
      className="space-y-32 bg-purple-300 border-2 border-black my-2 rounded-md"
      onClick={onHandlerDelete}
    >
      {props.children}
    </li>
  );
};

export default TaskUnit;
