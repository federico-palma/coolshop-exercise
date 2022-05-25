import { createContext, useState } from "react";

const NumbersContext = createContext({
  numbers: [],
  result: 0,
});

export const NumbersContextProvider = (props) => {
  const [userNumbers, setUserNumbers] = useState([]);
  const context = {
    numbers: userNumbers,
    result: 0,
    calculateResult: calculateResult(this.numbers),
  };

  const calculateResult = (numbersArray) => {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i];
    }
    return sum;
  };

  return (
    <NumbersContext.Provider value={context}>
      {props.children}
    </NumbersContext.Provider>
  );
};

export default NumbersContext;
