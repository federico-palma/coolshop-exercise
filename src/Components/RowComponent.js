import { useContext } from "react";
import NumbersContext from "../Store-context/numbers-context";

const RowComponent = (props) => {
  const numbersCtx = useContext(NumbersContext);

  return (
    <div className="row">
      <button type="button" className="operator">
        +/-
      </button>
      <input type="number" placeholder="Enter a number" onChange={e => numbersCtx.handleValueChange(props.index, parseInt(e.target.value))}/>
      <button type="button" className="disable-btn">
        Disable
      </button>
      <button type="button" className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default RowComponent;
