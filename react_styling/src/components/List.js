import "./List.css";
import Card from "./UI/Card/Card";

export default function List(props) {
  const deleteHandler = (event) => {
    props.onDeleteItem(event.target.id);
  };
  return (
    <Card className="card-list">
      <ul>
        {props.items.map((item) => (
          <li
            className="list-item"
            key={item.id}
            id={item.id}
            onClick={deleteHandler}
          >
            {`Curso ${item.title} na turma ${item.class}`}
          </li>
        ))}
      </ul>
    </Card>
  );
}
