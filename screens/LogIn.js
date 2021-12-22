import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function LogIn({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
