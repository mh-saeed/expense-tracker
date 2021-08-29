import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { View, Text, StyleSheet } from "react-native";

const BalanceStatus = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <View>
      <Text>YOUR BALANCE</Text>
      <Text style={styles.text}>${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#009432",
    fontWeight: "800",
    // alignSelf:"center"
  },
});

export default BalanceStatus;
