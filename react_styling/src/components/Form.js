import React, { useState } from "react";
import Button from "../components/UI/Button";
import ErrorModal from "./UI/ErrorModal/ErrorModal";
import "./Form.css";

export default function Form(props) {
  const [registerCourse, setRegisterCourse] = useState("");
  const [registerClass, setRegisterClass] = useState("");
  const [error, setError] = useState();
  const [isValid, setIsValid] = useState(true);

  const registerCourseHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
    setRegisterCourse(event.target.value);
  };

  const registerClassHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
    setRegisterClass(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (registerCourse.trim().length === 0 || registerClass.trim().length === 0) {

      setIsValid(false);
      setError({
        title: 'Invalid input',
        message: 'please name a valid course and class'
      })
      return;
    }

    const data = {
      id: Math.random(3).toString(),
      title: registerCourse,
      class: registerClass,
    };
    props.onSaveData(data);
    setRegisterCourse("");
    setRegisterClass("");
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClickHandlerError={errorHandler}/>}
      {!error &&
        <div>
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <h2 className={`course-h2-control ${!isValid ? "invalid" : ""}`}>
                Course Goal
              </h2>
              <input
                className={`course-input-control ${!isValid ? "invalid" : ""}`}
                value={registerCourse}
                type="text"
                placeholder="Type here"
                onChange={registerCourseHandler}
              />
              <h2 className={`class-h2-control ${!isValid ? "invalid" : ""}`}>
                Class
              </h2>
              <input
                className={`class-input-control ${!isValid ? "invalid" : ""}`}
                value={registerClass}
                type="text"
                placeholder="Type here"
                onChange={registerClassHandler}
              />
            </div>
            <Button type={"submit"} classes={"btn-form"}>
              Add Course
            </Button>
          </form>
        </div>
      }
    </div>
  );
}
