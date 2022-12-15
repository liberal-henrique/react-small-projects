import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const courses = [
    {
      id: "1a",
      title: "react",
      class: "A1",
    },
  ];
  const [item, setItem] = useState(courses);

  const addItemHandler = (data) => {
    setItem((prevData) => {
      return [data, ...prevData];
    });
  };

  const deleteItemHandler = (goalId) => {
    setItem((prevData) => {
      const updatedGoals = prevData.filter((item) => item.id !== goalId);
      return updatedGoals;
    });
  };

  console.log(item);
  return (
    <div>
      <section className="goal-form">
        <Form onSaveData={addItemHandler} />
      </section>
      <section className="goals">
        <List items={item} onDeleteItem={deleteItemHandler} />
      </section>
    </div>
  );
}
export default App;
