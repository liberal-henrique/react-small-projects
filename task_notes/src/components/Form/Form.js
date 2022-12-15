import React, { useState } from "react";

export default function Form(props) {
  const [taskTitle, setTaskTitle] = useState("");

  const taskChangeHandler = (event) => {
    setTaskTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);

    props.onSaveTaskData(taskTitle);
    setTaskTitle("");
  };

  return (
    <div className="m-20">
      <form
        onSubmit={submitHandler}
        className="flex flex-col place-content-center mx-auto w-full max-w-md h-full p-10 rounded-md shadow-2xl"
      >
        <label>
          <strong>Course Goal</strong>
          <input
            type="text"
            name="Goals"
            className="w-full block my-4 border"
            value={taskTitle}
            onChange={taskChangeHandler}
          />
        </label>
        <div>
          <button
            className="bg-purple-300 p-1 w-full rounded-sm cursor-pointer"
            type="submit"
          >
            Add Goal
          </button>
        </div>
      </form>
    </div>
  );
}
