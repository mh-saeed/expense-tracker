import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { GlobalContext } from "../../context/GlobalState";

const FormInput = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransactions } = useContext(GlobalContext);

  const onSubmit = (e) => {
    if (text.length === 0 || amount === 0) {
      alert(`please fill the fields!`);
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };

      addTransactions(newTransaction);

      // updating field / clearing after form submission
      setText(" ");
      setAmount(0);
    }
  };

  return (
    <View>
      <Input
        label={"TRANSACTION NAME"}
        placeholder="Enter text . . ."
        value={text}
        onChangeText={setText}
        leftIcon={
          <Icon
            name="document-text-outline"
            type="ionicon"
            size={30}
            color="#222222"
          />
        }
      />
      <Input
        label="ENTER AMOUNT (e.g -amount/amount)"
        keyboardType="numeric"
        placeholder=" Enter Amount . . ."
        value={amount.toString()}
        onChangeText={setAmount}
        leftIcon={
          <Icon
            name="attach-money"
            type="material-icons"
            size={30}
            color="#222222"
          />
        }
      />
      <Button title="ADD TRANSACTION" onPress={(e) => onSubmit(e)} />
    </View>
  );
};

export default FormInput;
