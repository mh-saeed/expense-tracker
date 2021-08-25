import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/homeScreen";
import AboutScreen from "../screens/aboutScreen";
import TransactionScreen from "../screens/transactionScreen";
import TransHistoryScreen from "../screens/transHistoryScreen";

const Drawer = createDrawerNavigator();

const NavigationBar = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Transactions" component={TransactionScreen} />
          <Drawer.Screen name="History" component={TransHistoryScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default NavigationBar;
