import ResultComponent from "./Components/ResultComponent";
import RowsContainerComponent from "./Components/RowsContainerComponent";
import { NumbersContextProvider } from "./Store-context/numbers-context";
import { useEffect } from "react"
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "React Challenge | Federico Palma"
  }, [])

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
