import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { ScrollView, Text, StyleSheet } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const TransHistoryScreen = () => {
  const { transactions, deleteTransactions } = useContext(GlobalContext);
  return (
    <ScrollView>
      <LinearGradient
        colors={["#e1f5fe", "#fff"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            style={[
              {
                borderLeftColor: `${
                  transaction.amount < 0 ? "#e84118" : "#4cd137"
                }`,
              },
              styles.list,
            ]}
            bottomDivider
          >
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {transaction.amount < 0 ? `-` : `+`}$
                {Math.abs(transaction.amount)}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
                <Text style={styles.text1}>{transaction.text}</Text>
                <Text style={styles.text2}>{`\n` + transaction.time}</Text>
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem color="black">
              <Icon
                name="delete-forever"
                type="material-icons"
                size={28}
                color="#EA2027"
                onPress={() => deleteTransactions(transaction.id)}
              />
            </ListItem>
          </ListItem>
        ))}
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    borderLeftWidth: 5,
    marginTop: 2,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    marginLeft: 10,
  },
  text1: { fontSize: 16, color: "#57606f" },
  text2: { fontSize: 12, marginTop: 1, color: "#a4b0be" },
});

export default TransHistoryScreen;
