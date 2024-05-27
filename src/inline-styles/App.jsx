import React from "react";

/*
    В div добавьте обводку (border) и цвет фона (background-color)
    В p тег добавьте цвет текста
 */
function App() {
  return (
    <div>
      <p style={{
        border: '2px solid purple',
        backgroundColor: 'pink'
      }}>
        Я текст, который был стилизован с помощью встроенных стилей (inline
        styles)
      </p>
    </div>
  );
}

export default App;
