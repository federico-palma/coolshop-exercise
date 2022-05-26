import { useContext, useState, useEffect } from "react";
import NumbersContext from "../Store-context/numbers-context";

const RowComponent = (props) => {
  const numbersCtx = useContext(NumbersContext);

  const [currentOperator, setCurrentOperator] = useState("+");
  const [currentValue, setCurrentValue] = useState(0);
  const [isEnabled, setIsEnabled] = useState(true);

  const handleChangeOperator = () => {
    setCurrentOperator(currentOperator === "+" ? "-" : "+");
  };
  const handleChangeEnabled = () => {
    setIsEnabled(!isEnabled);
  };

  useEffect(() => {
    numbersCtx.handleRowChange(
      props.id,
      parseInt(currentOperator + currentValue),
      isEnabled
    );
    // eslint-disable-next-line
  }, [currentOperator, currentValue, isEnabled]);

  return (
    <div className="row">
      <button type="button" className="operator" onClick={handleChangeOperator}>
        {currentOperator}
      </button>
      <input
        type="number"
        className="row-input"
        placeholder="Enter a number"
        onChange={(e) => setCurrentValue(e.target.value)}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() => numbersCtx.handleDeleteRow(props.id)}
      >
        Delete
      </button>
      <button
        type="button"
        className="disable-btn"
        onClick={handleChangeEnabled}
      >
        {isEnabled === true ? "Disable" : "Enable"}
      </button>
    </div>
  );
};

export default RowComponent;
