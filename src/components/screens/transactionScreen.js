import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StatusCard from "../statusCard/statusCard";
import BalanceStatus from "../statusCard/balanceStatus";
import FormInput from "../form/form";

const TransactionScreen = () => {
  return (
    <View style={styles.transContainer}>
      <View style={styles.balanceContainer}>
        <BalanceStatus />
      </View>
      <View style={styles.statusCard}>
        <StatusCard />
      </View>
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
  },
  balanceContainer: {
    flex:0.5,
    alignSelf: "flex-start",
    left: 25,
  },
  statusCard: { 
    flex: 2,
    top:10
   },
  form: {
    flex: 6,
    flexDirection: "column",
    width: 300,
    top: 55,
  },
});

export default TransactionScreen;
