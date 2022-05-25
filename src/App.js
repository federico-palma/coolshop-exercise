import ResultComponent from "./Components/ResultComponent";
import RowsContainerComponent from "./Components/RowsContainerComponent";
import { NumbersContextProvider } from "./Store-context/numbers-context";
import "./App.css";

function App() {
  return (
    <main className="App">
      <NumbersContextProvider>
        <RowsContainerComponent></RowsContainerComponent>
        <ResultComponent></ResultComponent>
      </NumbersContextProvider>
    </main>
  );
}

export default App;
