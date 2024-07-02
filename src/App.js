import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/egypthatchett626/"
            target="_blank"
          >
            {" "}
            Egypt Hatchett
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ehatche1/react-weather-app"
            target="_blank"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
