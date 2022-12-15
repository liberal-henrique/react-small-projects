import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Tasklist from "./components/Form/TaskList";

const App = () => {
  const TASKS_LIST = [
    {
      title: "Clean my room",
      id: "g1",
    },
  ];
  const [tasks, setTasks] = useState(TASKS_LIST);
  console.log(tasks);

  const addTaskHandler = (title) => {
    setTasks((prevTasks) => {
      const updatedGoals = [
        { title, id: Math.random().toString() },
        ...prevTasks,
      ];
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybee add one?</p>
  );

  if (tasks.length > 0) {
    content = <Tasklist items={tasks} />;
  }

  return (
    <div>
      <section>
        <Form onSaveTaskData={addTaskHandler} />
      </section>
      <section>{content}</section>
    </div>
  );
};

export default App;
