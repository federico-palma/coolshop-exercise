import { useContext } from "react";
import RowComponent from "./RowComponent";
import EmptyListMessageComponent from "./EmptyListMessageComponent";
import NumbersContext from "../Store-context/numbers-context";

const RowsContainerComponent = () => {
  const numbersCtx = useContext(NumbersContext);

  function Empty(params) {
    
  }

  return (
    <div className="row-container">
      <button className="new-row-btn" onClick={numbersCtx.handleAddNewRow}>
        Add new row
      </button>
      <ul className="row-list">
        {numbersCtx.rowsArray &&
          numbersCtx.rowsArray.map((element) => {
            return (
              <RowComponent
                key={element.id}
                id={element.id}
                value={element.value}
                enabled={element.enable}
              />
            );
          })}
        {!numbersCtx.rowsArray.length && <EmptyListMessageComponent/>}
      </ul>
    </div>
  );
};

export default RowsContainerComponent;
