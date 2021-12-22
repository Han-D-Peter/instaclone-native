import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreateAccount from "../screens/CreateAccount";
import LogIn from "../screens/LogIn";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={Welcome}
      />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen
        options={{
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "white",
        }}
        name="CreateAccount"
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
}
