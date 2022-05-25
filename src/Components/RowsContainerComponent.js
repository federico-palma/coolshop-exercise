import { useState } from "react";
import RowComponent from "./RowComponent";

const RowsContainerComponent = () => {
  const [numOfRows, setNumOfRows] = useState(5);

  const handleAddNewRow = () => {
      setNumOfRows(prevNumOfRows => prevNumOfRows + 1)
  }

  return (
    <div className="row-container">
      <button onClick={handleAddNewRow}>Add new row</button>
      <ul className="row-list">
          {[...Array(numOfRows)].map((e, i) => {
              return <RowComponent key={i} index={i}></RowComponent>
          })}
      </ul>
    </div>
  );
};

export default RowsContainerComponent;
