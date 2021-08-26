import React from "react";
import { HeaderBackground } from "@react-navigation/elements";
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
          <Drawer.Screen
            options={{
              headerTintColor: "#fff",
              headerBackground: () => (
                <HeaderBackground style={{ backgroundColor: "#2083F8" }} />
              ),
            }}
            name="Home"
            component={HomeScreen}
          />
          <Drawer.Screen
            options={{
              headerTintColor: "#fff",
              headerBackground: () => (
                <HeaderBackground style={{ backgroundColor: "#2083F8" }} />
              ),
            }}
            name="Transactions"
            component={TransactionScreen}
          />
          <Drawer.Screen
            options={{
              headerTintColor: "#fff",
              headerBackground: () => (
                <HeaderBackground style={{ backgroundColor: "#2083F8" }} />
              ),
            }}
            name="History"
            component={TransHistoryScreen}
          />
          <Drawer.Screen
            options={{
              headerTintColor: "#fff",
              headerBackground: () => (
                <HeaderBackground style={{ backgroundColor: "#2083F8" }} />
              ),
            }}
            name="About"
            component={AboutScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default NavigationBar;
