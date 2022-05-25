import { useContext } from "react";
import NumbersContext from "../Store-context/numbers-context";

const ResultComponent = () => {
  const numbersCtx = useContext(NumbersContext);

  return (
    <div className="result-container">
      <h2>Result:</h2>
      <h2>{numbersCtx.result}</h2>
    </div>
  );
};

export default ResultComponent;
