import { createContext, useEffect, useState } from "react";

const NumbersContext = createContext({
  numbers: [],
  result: 0,
});

export const NumbersContextProvider = (props) => {
  const [userNumbers, setUserNumbers] = useState([]);
  const [result, setResult] = useState(0);

  const handleValueChange = (index, value) => {
    let tempArray = [...userNumbers];
    tempArray[index] = value;
    setUserNumbers(tempArray);
  };

  const calculateResult = (numbersArray) => {
    let tempResult = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      if (!isNaN(numbersArray[i])) tempResult += numbersArray[i];
    }
    setResult(tempResult);
  };

  useEffect(() => {
    calculateResult(userNumbers);
  }, [userNumbers]);
  
  const context = {
    numbers: userNumbers,
    result: result,
    handleValueChange: handleValueChange,
  };

  return (
    <NumbersContext.Provider value={context}>
      {props.children}
    </NumbersContext.Provider>
  );
};

export default NumbersContext;
