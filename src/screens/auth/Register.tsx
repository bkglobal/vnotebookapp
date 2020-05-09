import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { Input, Icon, Button, CheckBox } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register({ navigation }: any) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState(""); 

  const validatePassword = (password: any) => {
    console.log(password);

    setPassword(password.replace(" ", ""));
  };

  const validateSpace = (value: any) => {
    console.log(value);
    if (value === " ") {
      return false;
    }
    return true;
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      enableAutomaticScroll
      keyboardOpeningTime={0}
      extraHeight={Platform.select({})}
    >
      <View style={Styles.mainContainer}>
        <Image
          style={Styles.logo}
          source={require("../../../assets/images/white.png")}
        />
        <Text style={Styles.textLogin}>Register</Text>
        <View style={Styles.inputContainer}>
          <Input
            placeholder="Username"
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
            placeholder="Email"
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
            errorMessage=""
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

          <Input
            placeholder="Confirm Password"
            errorMessage=""
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

          <Input
            placeholder="Institute"
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

          <View style={Styles.registerGender}>
              <Text style={Styles.genderText}>Gender</Text>
              <View style={Styles.checkBoxes}>
              <CheckBox
                center
                title ="Male"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={true}
                containerStyle={{backgroundColor: 'transparent', borderWidth: 0, paddingLeft: 0, paddingRight: 0}}
                textStyle={{fontSize: 18}}
                />
                <CheckBox
                center
                title="Female"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={false}
                containerStyle={{backgroundColor: 'transparent', borderWidth: 0, paddingLeft: 0, paddingRight: 0}}
                textStyle={{fontSize: 18}}
                />
                </View>
          </View>
        </View>
        <View style={Styles.buttonContainer}>
         
          <Button
            title="Submit"
            onPress={() => {
              navigation.navigate("Register", { name: "Jane" });
            }}
            titleStyle={Styles.buttonTitle}
            buttonStyle={{ ...Styles.button, backgroundColor: "#1f8f10" }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const Styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 140,
  },
  textLogin: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 50,
    color: "gray",
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 320,
    width: 300,
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 20,
  },
  buttonContainer: {
    width: 200,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 100,
    marginTop: 50,
  },
  button: {
    borderRadius: 100,
    // backgroundColor: ""
  },

  registerGender: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",

  }, 
  checkBoxes:  {
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingLeft: 50
  },
  genderText :{ 
      fontSize: 18, 
      fontWeight: "bold"
  }
});
