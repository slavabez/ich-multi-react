import React from "react";

// Импортируем CSS файл
import "../styles/TeamCard.css";

/*
    Принимаем 2 пропа name (строка, название команды) и members (массив строк)
    Связка стилей - через CSS class TeamCard, не забудьте добавить его
 */
function TeamCard(props) {
  return <div className="TeamCard">
    <h3>{props.name}</h3>
    <ul>
      {props.members.map((member) => <li key={member}>{member}</li>)}
    </ul>
  </div>;
}

export default TeamCard;
