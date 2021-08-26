import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { NavigationBar } from "./src";
import { GlobalProvider } from "./src/context/GlobalState";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GlobalProvider>
        <NavigationBar />
      </GlobalProvider>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default App;
