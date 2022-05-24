import RowComponent from './Components/RowComponent'
import "./App.css";

function App() {
  return (
    <main className="App">
      <button>Add new row</button>
      <div className="rows-container">
        <RowComponent></RowComponent>
      </div>
      <div className="result-container">
        <h2>Result:</h2>
        <h2>100</h2>
      </div>
    </main>
  );
}

export default App;
