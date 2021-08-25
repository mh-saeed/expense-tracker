import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { View, Text } from 'react-native'

const BalanceStatus = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    return (
       <View>
           <Text>YOUR BALANCE</Text>
           <Text>${total}</Text>
       </View>
    )
}

export default BalanceStatus
