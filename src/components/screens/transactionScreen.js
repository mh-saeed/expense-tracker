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
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    width:310,
    alignSelf:"center",
  },
  balanceContainer: {
    alignItems:"flex-start",
    width:310
  },
  statusCard: {
    alignItems:"center",
    justifyContent:"center",
    height: 150,
    width:300,
    // backgroundColor:"red"
  },
  form: {
    width: 310,
    top: 5,
    height: 260,
  },
});

export default TransactionScreen;
