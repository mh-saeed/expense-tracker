import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: `Salary`,
      amount: 1500,
      time: `August 26th 2021, 12:00:17 pm`,
    },
    {
      id: 2,
      text: `electricity-bill`,
      amount: -200,
      time: `July 25th 2021, 11:15:23 pm`,
    },
    {
      id: 3,
      text: `utility-stuff`,
      amount: -400,
      time: `July 21th 2021, 09:31:35 pm`,
    },
    {
      id: 4,
      text: `monthly-bonus`,
      amount: 500,
      time: `June 15th 2021, 10:22:03 am`,
    },
    {
      id: 5,
      text: `school-fee`,
      amount: -150,
      time: `May 15th 2021, 05:11:55 pm`,
    },
    {
      id: 6,
      text: `crypto-income`,
      amount: 2300,
      time: `May 10th 2021, 06:25:24 pm`,
    },
    {
      id: 7,
      text: `tax-paid`,
      amount: -250,
      time: `April 21th 2021, 06:05:08 pm`,
    },
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
      type: "DELETE_TRANSACTION",
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
