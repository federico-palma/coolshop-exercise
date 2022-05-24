import { useState } from "react";
import ResultComponent from "./Components/ResultComponent";
import RowsContainerComponent from "./Components/RowsContainerComponent";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);

  return (
    <main className="App">
      <RowsContainerComponent></RowsContainerComponent>
      <ResultComponent></ResultComponent>
    </main>
  );
}

export default App;
