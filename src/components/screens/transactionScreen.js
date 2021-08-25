import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import StatusCard from "../statusCard/statusCard";
import BalanceStatus from "../statusCard/balanceStatus";
import FormInput from "../form/form";

const TransactionScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  transContainer: {
    // flex: 1,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
  },
  balanceContainer: {
    alignSelf: "flex-start",
    left: 20,
  },
  statusCard: {
    alignSelf: "flex-start",
    height: 150,
    top: -5,
  },
  form: {
    width: 320,
    top: 5,
    height: 250,
  },
});

export default TransactionScreen;
