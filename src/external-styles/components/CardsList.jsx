import React from "react";
import TeamCard from "./TeamCard";

// Импортируем CSS файл
import "../styles/CardsList.css";

/*
    Принимаем проп teams (массив), обходим с помощью функции map и для каждого
    элемента массива отрисовываем компонент TeamCard, которому в свою очередь
    передаем проп name and members. Не забываем так же про проп key.

    Для стилизации данного компонента мы используем внешний файл CardsList.css
    Связка стилей - через CSS class CardsList, не забудьте добавить его
 */
function CardsList(props) {
  return <div></div>;
}

export default CardsList;
