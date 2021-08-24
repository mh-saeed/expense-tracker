import * as React from "react";
import { StyleSheet, StatusBar, Platform, SafeAreaView } from "react-native";

import { NavigationBar } from "./src";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
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
