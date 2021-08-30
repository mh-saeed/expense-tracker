import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, StatusBar } from "react-native";
import StatusCard from "../statusCard/statusCard";
import BalanceStatus from "../statusCard/balanceStatus";
import FormInput from "../form/form";
import { LinearGradient } from "expo-linear-gradient";

const TransactionScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#e1f5fe", "#fff"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
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
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  transContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    width: 310,
    alignSelf: "center",
    height: Dimensions.get("window").height-StatusBar.currentHeight,
  },
  balanceContainer: {
    alignItems: "flex-start",
    width: 310,
  },
  statusCard: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 300,
    // backgroundColor:"red"
  },
  form: {
    width: 310,
    top: 5,
    height: 250,
  },
});

export default TransactionScreen;
