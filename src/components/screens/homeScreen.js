import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TransactionScreen from "./transactionScreen";
import TransHistoryScreen from "./transHistoryScreen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Transaction" component={TransactionScreen} />
        <Tab.Screen name="History" component={TransHistoryScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
