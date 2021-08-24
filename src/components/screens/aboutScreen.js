import React from "react";
import { View, Text, Button } from "react-native";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to notifications"
      />
    </View>
  );
};

export default AboutScreen;
