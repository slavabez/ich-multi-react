import React from "react";

// ! Нерабочий пример !
function SimpleUseState() {
  // Посмотрим, когда и сколько раз будет вызываться этот код
  console.log("Вызов нашего компонента SimpleUseState");

  let numberOfClicks = 0;

  function incrementNumberOfClicks() {
    // Прибавляем 1
    numberOfClicks += 1;
    // Посмотрим что у нас теперь хранится в нашей переменной
    console.log(numberOfClicks);
  }

  return (
    <div>
      <p>Number of clicks: {numberOfClicks}</p>
      <button onClick={incrementNumberOfClicks}>+1</button>
    </div>
  );
}

export default SimpleUseState;
