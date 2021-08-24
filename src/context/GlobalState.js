import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    { id: 1, text: `Salary`, amount: 1500 },
    { id: 2, text: `electricity-bill`, amount: -200 },
    { id: 3, text: `utility-stuff`, amount: -400 },
    { id: 4, text: `monthly-bonus`, amount: 500 },
    { id: 5, text: `school-fee`, amount: -150 },
    { id: 6, text: `crypto-income`, amount: 2300 },
    { id: 7, text: `tax-paid`, amount: -250 },
  ],
};

// Creating Context
export const GlobalContext = createContext(initialState);

// Creating Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransactions(id) {
    dispatch({
      type: "Delete_TRANSACTION",
      payload: id,
    });
  }
  function addTransactions(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
