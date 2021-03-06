import React, { useState } from "react";
import { StyleSheet, Text, View, Image,Platform } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Login({navigation}:any) {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("")

    const validatePassword = (password: any) => {
        console.log(password);
        
        setPassword(password.replace(' ', ''));
    }

    const validateSpace = (value: any) => {
        console.log(value);
        if(value === ' ') {
            return false;
        }
        return true;
    }
  return (
    <KeyboardAwareScrollView
    enableOnAndroid
    enableAutomaticScroll
    keyboardOpeningTime={0}
    extraHeight={Platform.select({ })}
  >
    <View style={Styles.mainContainer}>
      <Image
        style={Styles.logo}
        source={require("../../../assets/images/white.png")}
      />
      <Text style={Styles.textLogin}>Login</Text>
      <View style={Styles.inputContainer}>
        <Input
          placeholder="Email"
          maxLength={10}
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
            color: "gray",
            iconStyle: {
              width: 30,
              alignItems: "center",
              alignContent: "center",
              marginRight: 10,
            },
          }}
          // leftIcon={<Icon name='/>}
        />
        <Input
          placeholder="Password"
          errorMessage=''
          secureTextEntry={true}
          value={Password}
          onChangeText={validatePassword}
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "gray",
            iconStyle: {
              width: 30,
              alignItems: "center",
              alignContent: "center",
              fontSize: 35,
              marginRight: 10,
            },
          }}
          // leftIcon={<Icon name='/>}
        />
      </View>
      <View style={Styles.buttonContainer}>
      <Button title="Login"  onPress={() => {navigation.navigate('Login', {name: 'Jane'})}} titleStyle={Styles.buttonTitle} buttonStyle={{...Styles.button, backgroundColor: '#1f8f10'}}/>
      <Button title="Register" onPress={() => {navigation.navigate('Register', {name: 'Jane'})}} titleStyle={Styles.buttonTitle} buttonStyle={{...Styles.button, backgroundColor: '#c10936'}}/>

      </View>
    </View>
    </KeyboardAwareScrollView>
  );
}
const Styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 140,
  },
  textLogin: {
    marginTop: 40,
    marginBottom: 40,
    fontSize: 50,
    color: 'gray',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 130,
    width: 300,
    marginTop: 20,
  },
  buttonTitle: {
      fontSize: 20,
  },
  buttonContainer: {
      width: 200,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 100,
      marginTop: 50
  },
  button:  {
      borderRadius: 100
    // backgroundColor: ""
  }
});
