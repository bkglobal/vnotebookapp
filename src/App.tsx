import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from './Navigation';
const Stack = createStackNavigator();

export default function App() {
  return (
      <Navigation />
    // <View>
    //   <View style={styles.vbnHeader}>
    //     <Text style={styles.vbnHeaderTitle}>VBN</Text>
    //   </View>
    //   <View style={styles.vbnBodyContainer}>
    //     <NavigationContainer>
    //       <Stack.Navigator>
    //         <Stack.Screen
    //           name="Home"
    //           component={Home}
    //           options={{ title: "Welcome" }}
    //         />
    //         <Stack.Screen
    //           name="login"
    //           component={Login}
    //           options={{ title: "Login" }}
    //         />
    //       </Stack.Navigator>
    //     </NavigationContainer>

    //     <NavigationContainer>
    //       <Stack.Navigator>
    //         <Stack.Screen name="Home" component={Home} />
    //         <Stack.Screen name="Login" component={Login} />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  vbnHeader: {
    backgroundColor: "blue",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 35,
  },
  vbnImage: {
    width: 50,
    height: 50,
  },
  vbnHeaderTitle: {
    marginTop: 4,
  },
  vbnBodyContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
