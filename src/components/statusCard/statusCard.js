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
      <View>
        <Text>Your Balance </Text>
      </View>
      <View style={styles.container}>
        <Card title="HELLO WORLD">
          <Text style={{ marginBottom: 10 }}>
            Income {"\n"}
            {income}
          </Text>
        </Card>
        <Card title="HELLO WORLD">
          <Text style={{ marginBottom: 10 }}>
            Expense {"\n"}
            {expense}
          </Text>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StatusCard;
