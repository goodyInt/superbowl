import "./App.css";
import Board from "./components/board/board";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("UA-146679693-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
