import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { Button } from "react-native";
const Stack = createStackNavigator();

const headerOptions = {
  title: "VBN",
  gestureDirection: "vertical-inverted",
  headerStyle: { backgroundColor: "blue" },
  headerTintColor: "white",
  headerTitleStyle: { fontWeight: "bold" },
//   headerRight: () => <Button title="Info" onPress={()=> {}}/>
} as StackNavigationOptions;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={headerOptions} />
        <Stack.Screen name="Login" component={Login} options={headerOptions}/>
        <Stack.Screen name="Register" component={Register} options={headerOptions}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
