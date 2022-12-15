import React from "react";
import Button from "../Button";
import Card from "../Card/Card";
import "./ErrorModal.css";

export default function ErrorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onClickHandlerError}/>
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">{props.message}</div>
        <footer className="actions">
          <Button onClick={props.onClickHandlerError}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
}
