import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("About")} title="About" />
    </View>
  );
};

export default HomeScreen;
