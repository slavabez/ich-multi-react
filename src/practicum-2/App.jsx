import { useState } from "react";
import "./styles.css";

function Header({ theme, toggleTheme }) {
  return (
    <header
      style={{
        backgroundColor: theme.headerBackgroundColor,
        color: theme.mainColor,
        borderBottomColor: theme.borderColor,
      }}
      className="Header"
    >
      ThemeSwitcher:
      <button
        onClick={toggleTheme}
        style={{
          color: theme.mainColor,
          borderColor: theme.borderColor,
        }}
      >
        Switch
      </button>
    </header>
  );
}

function MainContent({ theme }) {
  return (
    <main
      style={{
        color: theme.mainColor,
      }}
      className="MainContent"
    >
      <h2>lorem asdasdas asdasd asd asd asd </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
        veritatis autem. Quaerat, repudiandae sed. Fuga dolor numquam quod ex,
        iure repudiandae qui inventore officiis mollitia. Accusantium ad
        consequuntur amet?
      </p>
      <h2>lorem asdasdas asdasd asd asd asd </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
        veritatis autem. Quaerat, repudiandae sed. Fuga dolor numquam quod ex,
        iure repudiandae qui inventore officiis mollitia. Accusantium ad
        consequuntur amet?
      </p>
    </main>
  );
}

function Footer({ theme }) {
  return (
    <footer
      style={{
        backgroundColor: theme.headerBackgroundColor,
        color: theme.mainColor,
        borderTopColor: theme.borderColor,
      }}
      className="Footer"
    >
      <a style={{ color: theme.mainColor }} href="#">
        Copyright
      </a>
      <a style={{ color: theme.mainColor }} href="#">
        Links
      </a>
    </footer>
  );
}

const lightTheme = {
    mainColor: "black",
    borderColor: "black",
    headerBackgroundColor: "rgb(137, 182, 197)",
    contentBackgroundColor: "lightblue",
  };

  const darkTheme = {
    mainColor: "white",
    borderColor: "white",
    headerBackgroundColor: "black",
    contentBackgroundColor: "black",
  };

function App() {
  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme(){
    const isLight = theme.mainColor === "black";
    if (isLight) {
        setTheme(darkTheme);
    } else {
        setTheme(lightTheme);
    }
  }

  return (
    <div
      style={{
        backgroundColor: theme.contentBackgroundColor,
      }}
      className="App"
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <MainContent theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
