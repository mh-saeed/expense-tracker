import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { GlobalContext } from "../../context/GlobalState";

const StatusCard = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <View>
      <View style={styles.cardContainer}>
        <Card title="Income" containerStyle={styles.card}>
          <Text>INCOME</Text>
          <Text>${income}</Text>
        </Card>
        <Card title="Expense" containerStyle={styles.card}>
          <Text>EXPENSE</Text>
          <Text>${expense}</Text>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex:1,
    flexDirection: "row",
    // backgroundColor: "#4582B4",
  },
  card: {
    height: 120,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StatusCard;
