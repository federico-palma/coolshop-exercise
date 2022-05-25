import { useContext, useState, useEffect } from "react";
import NumbersContext from "../Store-context/numbers-context";

const RowComponent = (props) => {
  const numbersCtx = useContext(NumbersContext);

  const [currentOperator, setCurrentOperator] = useState("+");
  const [currentValue, setCurrentValue] = useState(0);

  const handleChangeOperator = () => {
    setCurrentOperator(currentOperator === "+" ? "-" : "+");
  };

  useEffect(() => {
    numbersCtx.handleValueChange(
      props.index,
      parseInt(currentOperator + currentValue)
    );
    // eslint-disable-next-line
  }, [currentOperator, currentValue]);

  return (
    <div className="row">
      <button type="button" className="operator" onClick={handleChangeOperator}>
        {currentOperator}
      </button>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setCurrentValue(e.target.value)}
      />
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
