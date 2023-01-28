import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import EmailLoginButton from "../EmailLoginButton";
import EmailSignupButton from "../EmailSignupButton";
import GoogleLoginButton from "../GoogleLoginButton";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
const LoginScreen = (props) => {
  const [loginMethod, setLoginMethod] = useState("");
  console.log(loginMethod);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={require("../../assets/notes_logo.png")}
      />
      <Text style={styles.headerText}>Welcome !</Text>
      {loginMethod === "" && (
        <View style={styles.methodContainer}>
          <GoogleLoginButton setLoginMethod={setLoginMethod} />
          <EmailLoginButton setLoginMethod={setLoginMethod} />
          <EmailSignupButton setLoginMethod={setLoginMethod} />
        </View>
      )}
      {loginMethod === "email" && (
        <View style={styles.methodContainer}>
          <LoginForm setLoginMethod={setLoginMethod} setUser={props.setUser} />
        </View>
      )}
      {loginMethod === "signup" && (
        <View style={styles.methodContainer}>
          <SignupForm setLoginMethod={setLoginMethod} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: 250,
    height: 110,
    marginBottom: 8,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 26,
    color: "#E3A72F",
    fontWeight: "bold",
    paddingVertical: 12,
  },
  methodContainer: {
    width: "100%",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
export default LoginScreen;
