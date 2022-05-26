import { createContext, useEffect, useState } from "react";

const NumbersContext = createContext({
  rowsArray: [],
  result: 0,
});

let keyCounter = 0;
function keyGen() {
  keyCounter++;
  return keyCounter;
}

export const NumbersContextProvider = (props) => {
  const rowObjectCreator = () => {
    return { id: keyGen(), value: 0, enable: true };
  };

  const [rowsArray, setRowsArray] = useState([rowObjectCreator()]);
  const [result, setResult] = useState(0);

  const handleValueChange = (index, value) => {
    let tempArray = [...rowsArray];
    tempArray.find(x => x.id === index).value = value;
  };

  const handleAddNewRow = () => {
    setRowsArray((prevValue) => [...prevValue, rowObjectCreator()]);
  };

  const handleDeleteRow = (index) => {
    let tempArray = [...rowsArray];
    tempArray.splice(index, 1);
    setRowsArray(rowsArray.filter((element) => element.id !== index));
  };

  const calculateResult = (rowsArray) => {
    let tempArray = rowsArray.filter(element => !isNaN(element.value) && element.enable)
    let tempResult = tempArray.reduce((prevElement, element) => prevElement + element.value, 0)
    setResult(tempResult);
  };

  useEffect(() => {
    calculateResult(rowsArray);
  }, [rowsArray]);

  const context = {
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
