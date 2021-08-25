import React from "react";
import { View } from "react-native";
import { Input, Button , Icon} from "react-native-elements";

// import Icon from "react-native-vector-icons/Ionicons";

const FormInput = () => {
  return (
    <View>
      <Input
        placeholder="TRANSACTION NAME"
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
        placeholder="TRANSACTION AMOUNT"
        leftIcon={
          <Icon
            name="attach-money"
            type="material-icons"
            size={30}
            color="#222222"
          />
        }
      />
      <Button title="Outline button" type="outline" />
    </View>
  );
};

export default FormInput;
