import React, { useContext } from "react";
import { GlobalContext, GlobalProvider } from "../../context/GlobalState";
import { ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const TransHistoryScreen = () => {
  const { transactions, deleteTransactions } = useContext(GlobalContext);
  return (
    <ScrollView>
     
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            style={{
              borderLeftColor: `${
                transaction.amount < 0 ? "#e84118" : "#4cd137"
              }`,
              borderLeftWidth: 5,
              marginTop: 4,
            }}
            bottomDivider
          >
            <ListItem.Content>
              <ListItem.Title>
                {transaction.amount < 0 ? `-` : `+`}$
                {Math.abs(transaction.amount)}
              </ListItem.Title>
              <ListItem.Subtitle>{transaction.text}</ListItem.Subtitle>
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
    </ScrollView>
  );
};

export default TransHistoryScreen;
