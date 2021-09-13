import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { GlobalContext } from "../../context/GlobalState";
import moment from "moment";

const FormInput = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("0");

  const { addTransactions } = useContext(GlobalContext);

  const onSubmit = () => {
    let checkAmount = String(amount);

    if (text.length === 0 || amount === 0 || typeof amount !== "number") {
      alert(`please fill the fields!`);
    } else if (checkAmount[0] == "-" || checkAmount == "NaN") {
      alert("Special characters are not allowed 1");
    } else {
      //creating new transaction
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };

      addTransactions(newTransaction);

      // updating field / clearing after form submission
      setText("");
      setAmount("0");
    }
  };

  const onWithdraw = () => {
    let checkAmount = String(amount);
    if (text.length === 0 || amount === 0 || typeof amount !== "number") {
      alert(`please fill the fields!`);
    } else if (checkAmount[0] == "-" || checkAmount == "NaN") {
      alert("special characters are not allowed 2");
    } else {
      //creating new transaction
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +-Math.abs(amount),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };

      addTransactions(newTransaction);

      // updating field / clearing after form submission
      setText("");
      setAmount("0");
    }
  };

  return (
    <View>
      <Input
        label={"TRANSACTION NAME"}
        labelStyle={{ color: "#757575" }}
        placeholder="Enter text . . ."
        value={text}
        onChangeText={(text) => setText(text)}
        leftIcon={
          <Icon
            name="text"
            type="entypo"
            size={18}
            color="#9980FA"
          />
        }
      />
      <Input
        label="TRANSACTION AMOUNT"
        labelStyle={{ color: "#757575" }}
        keyboardType="numeric"
        placeholder="Enter Amount . . ."
        value={amount}
        onChangeText={(text) => setAmount(Number(text))}
        leftIcon={
          <Icon
            name="attach-money"
            type="material-icons"
            size={18}
            color="#2ed573"
          />
        }
      />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <Button
          buttonStyle={{
            backgroundColor: "#eb4d4b",
            marginTop: 10,
            width: 150,
            marginRight: 5,
            borderRadius:30
          }}
          title="- CASH OUT"
          onPress={() => onWithdraw()}
        />
        <Button
          buttonStyle={{
            backgroundColor: "#6ab04c",
            marginTop: 10,
            width: 150,
            marginLeft: 5,
            borderRadius:30
          }}
          title="+ CASH IN"
          onPress={() => onSubmit()}
        />
        
      </View>
    </View>
  );
};

export default FormInput;
