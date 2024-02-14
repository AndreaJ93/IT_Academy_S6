import { createContext, useContext, useState, useEffect } from "react";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    // Obtener los datos almacenados
    const storedBudgetData =
      JSON.parse(localStorage.getItem("budgetData")) || [];
    setBudgetData(storedBudgetData);
  }, []);

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

export const useBudgetProvider = () => {
  return useContext(BudgetContext);
};

export default BudgetProvider;
