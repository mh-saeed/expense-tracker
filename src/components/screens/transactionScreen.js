import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StatusCard from "../statusCard/statusCard";
import BalanceStatus from "../statusCard/balanceStatus";
import FormInput from "../form/form";

const TransactionScreen = () => {
  return (
    <View style={styles.transContainer}>
      <BalanceStatus />
      <StatusCard />
      <View style={styles.form}>
        <FormInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    backgroundColor:"red"
  },
  form: {
    flex: 1,
    flexDirection: "column",
    width: 300,
    position:"relative",
  },
});

export default TransactionScreen;
