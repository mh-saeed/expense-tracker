import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screens/homeScreen'
import AboutScreen from '../screens/aboutScreen'
import TransactionScreen from '../screens/transactionScreen'


const Drawer = createDrawerNavigator();

const NavigationBar = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Transactions" component={TransactionScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default NavigationBar;
