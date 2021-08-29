import React from "react";
import { View, Text, Linking } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const AboutScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        top: 50,
      }}
    >
      <Card containerStyle={{ borderRadius: 6 }}>
        <Card.Title>Expense Tracker</Card.Title>
        <Card.Divider />

        <Text style={{ marginBottom: 10, width: 280, alignSelf: "center" }}>
          This Project is created using React Native, React Hooks, Context API,
          React Navigation, React Element.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 4,
            marginTop: 8,
            width: 220,
            alignSelf: "center",
            backgroundColor: "#2083F8",
          }}
          style={{ paddingRight: 25 }}
          title="VIEW SOURCE CODE"
          onPress={() => {
            Linking.openURL("https://github.com/mh-saeed/expense-tracker");
          }}
        />
      </Card>
    </View>
  );
};

export default AboutScreen;
