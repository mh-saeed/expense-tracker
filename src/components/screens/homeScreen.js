import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import StatusCard from "../statusCard/statusCard";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <StatusCard/>
      <Button onPress={() => navigation.navigate("About")} title="About" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 0.5,
    alignItems: "center", 
    justifyContent: "center"
   },
});

export default HomeScreen;
