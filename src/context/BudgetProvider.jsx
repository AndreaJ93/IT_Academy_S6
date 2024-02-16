import { createContext, useState, useEffect } from "react";

export const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    // Obtener los datos almacenados
    const storedBudgetData =
      JSON.parse(localStorage.getItem("budgetData")) || [];
    setBudgetData(storedBudgetData);
  }, []);

  //agregar nuevos datos al array
  const addBudget = (newBudget) => {
    setBudgetData([...budgetData, newBudget]);
  };

  useEffect(() => {
    // Actualizar el almacenamiento local
    localStorage.setItem("budgetData", JSON.stringify(budgetData));
  }, [budgetData]);

  const contextValue = {
    budgetData,
    addBudget,
  };

  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
