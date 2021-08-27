import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { GlobalContext } from "../../context/GlobalState";
import moment from "moment";

const FormInput = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("0");

  const { addTransactions } = useContext(GlobalContext);

  const onSubmit = (e) => {
    let checkAmount = String(amount);
    // console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
    //temp variable to store amount
    let temp =
      checkAmount[0] == "-"
        ? String(checkAmount.slice(1))
        : String(checkAmount);
    // console.log(typeof temp, temp, typeof amount, amount);

    if (text.length === 0 || amount === 0 || typeof amount !== "number") {
      alert(`please fill the fields!`);
    } else if (temp == "NaN") {
      alert("Special characters are not allowed");
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

  return (
    <View>
      <Input
        label={"TRANSACTION NAME"}
        labelStyle={{ color: "#353b48" }}
        placeholder="Enter text . . ."
        value={text}
        onChangeText={(text) => setText(text)}
        leftIcon={
          <Icon
            name="document-text-outline"
            type="ionicon"
            size={30}
            color="#5f27cd"
          />
        }
      />
      <Input
        label="ENTER AMOUNT (e.g -amount/amount)"
        labelStyle={{ color: "#222222" }}
        keyboardType="numeric"
        placeholder=" Enter Amount . . ."
        value={amount}
        onChangeText={(text) => setAmount(Number(text))}
        leftIcon={
          <Icon
            name="attach-money"
            type="material-icons"
            size={30}
            color="#19D95E"
          />
        }
      />
      <Button
        buttonStyle={{ backgroundColor: "#2083F8", marginTop: 10 }}
        title="ADD TRANSACTION"
        onPress={(e) => onSubmit(e)}
      />
    </View>
  );
};

export default FormInput;
