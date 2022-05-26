import { useContext } from "react";
import RowComponent from "./RowComponent";
import NumbersContext from "../Store-context/numbers-context";

const RowsContainerComponent = () => {
  const numbersCtx = useContext(NumbersContext);

  return (
    <div className="row-container">
      <button onClick={numbersCtx.handleAddNewRow}>Add new row</button>
      <ul className="row-list">
        {numbersCtx.rowsArray.map((element) => {
          return (
            <RowComponent
              key={element.id}
              id={element.id}
              value={element.value}
              enabled={element.enable}
            ></RowComponent>
          );
        })}
      </ul>
    </div>
  );
};

export default RowsContainerComponent;
