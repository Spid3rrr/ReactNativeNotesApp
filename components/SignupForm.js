import React, { useState } from "react";
import { StyleSheet, Text, Pressable, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { createUser } from "../utils/firebaseAuthUtil";

export default function SignupForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showError = (message) => {
    Alert.alert("Sign up Error", message, [
      {
        text: "Dismiss",
        style: "cancel",
      },
    ]);
  };
  const showSuccess = (message) => {
    Alert.alert("Sign up success", message, [
      {
        text: "Close",
        onPress: () => props.setLoginMethod(""),
        style: "cancel",
      },
    ]);
  };
  const signUp = async () => {
    if (email === "") {
      showError("Email cannot be empty");
      return;
    }
    if (!validateEmail(email)) {
      showError("Email is invalid");
      return;
    }
    if (password === "") {
      showError("Password cannot be empty");
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        showSuccess("Sign up succeeded ! Please log in");
      })
      .catch((error) => {
        console.log(error);
        showError(error.message);
      });
  };
  return (
    <>
      <TextInput
        style={styles.input}
        selectionColor={"#E3A72F"}
        activeOutlineColor={"#E3A72F"}
        mode="outlined"
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        selectionColor={"#E3A72F"}
        activeOutlineColor={"#E3A72F"}
        mode="outlined"
        label="Password"
        returnKeyType="next"
        value={password.value}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        textContentType="password"
        keyboardType="password"
        secureTextEntry={true}
      />

      <Pressable
        onPress={() => {
          signUp();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          props.setLoginMethod("");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Return</Text>
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
    fontSize: 16,
    color: "#E3A72F",
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: "#E3A72F",
  },
  input: {
    width: "80%",
    marginVertical: 12,
    backgroundColor: "white",
    borderColor: "#E3A72F",
    borderRadius: 50,
  },
  button: {
    width: "50%",
    backgroundColor: "#E3A72F",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    margin: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

const validateEmail = (email) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
