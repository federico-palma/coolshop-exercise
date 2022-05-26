import { createContext, useEffect, useState } from "react";

const NumbersContext = createContext({
  numbers: [],
  rowsArray: [],
  result: 0,
});

let keyCounter = 0;
function keyGen() {
  keyCounter += 1;
  return keyCounter;
}

export const NumbersContextProvider = (props) => {
  const rowObjectCreator = () => {
    return { id: keyGen(), value: 0, enable: true };
  };

  const [rowsArray, setRowsArray] = useState([rowObjectCreator()]);
  const [userNumbers, setUserNumbers] = useState([]);
  const [result, setResult] = useState(0);

  const handleValueChange = (index, value) => {
    let tempArray = [...rowsArray];
    tempArray.find(x => x.id === index).value = value;
    setUserNumbers(tempArray);
  };

  const handleAddNewRow = () => {
    setRowsArray((prevValue) => [...prevValue, rowObjectCreator()]);
  };

  const handleDeleteRow = (index) => {
    let tempArray = [...rowsArray];
    tempArray.splice(index, 1);
    setUserNumbers(tempArray);
    setRowsArray(rowsArray.filter((element) => element.id !== index));
  };

  const calculateResult = (rowsArray) => {
    let tempArray = rowsArray.filter(element => !isNaN(element.value) && element.enable)
    let tempResult = tempArray.reduce((prevElement, element) => prevElement + element, 0)
    console.log(tempResult);
    setResult(tempResult);
  };

  useEffect(() => {
    calculateResult(rowsArray);
  }, [rowsArray]);

  const context = {
    numbers: userNumbers,
    rowsArray: rowsArray,
    result: result,
    handleValueChange: handleValueChange,
    handleAddNewRow: handleAddNewRow,
    handleDeleteRow: handleDeleteRow,
  };

  return (
    <NumbersContext.Provider value={context}>
      {props.children}
    </NumbersContext.Provider>
  );
};

export default NumbersContext;
