import React from "react";
import CardsList from "./CardsList";

function App() {
  const teams = [
    {
      name: "Dragons United",
      members: [
        "David Miller",
        "Ethan Turner",
        "Natalie Clark",
        "Sophie Gomez",
        "Tom Hanks",
      ],
    },
    {
      name: "Golden Eagles",
      members: [
        "Lisa Ray",
        "Harry Ford",
        "Betty Cooper",
        "George King",
        "Alice Morgan",
      ],
    },
    {
      name: "Mighty Warriors",
      members: [
        "Sam Wilson",
        "John Norton",
        "Emma Cartright",
        "Daniel Lewis",
        "Megan Stone",
      ],
    },
    {
      name: "Falcon Flyer",
      members: [
        "Oscar Wilde",
        "Robert Brown",
        "Victoria Smith",
        "Rachel Adams",
        "Matthew Johns",
      ],
    },
    {
      name: "Storm Breakers",
      members: [
        "Lucas White",
        "Eva Taylor",
        "Charles Anderson",
        "Emily Johnson",
        "Aaron Carter",
      ],
    },
  ];

  // Отрисуйте компонент CardsList, передайте ему массив teams как проп teams
  return (
    <div>
      <h1>Внешние стили</h1>
      <CardsList teams={teams} />
    </div>
  );
}

export default App;
