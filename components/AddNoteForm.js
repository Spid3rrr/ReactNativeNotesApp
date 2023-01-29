import React, { useState } from "react";
import { StyleSheet, Text, Pressable, Alert, View } from "react-native";
import { TextInput } from "react-native-paper";
import { addNote } from "../utils/firebaseDataUtil";

export default function LoginForm(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const showError = (message) => {
    Alert.alert("New Note Error", message, [
      {
        text: "Dismiss",
        style: "cancel",
      },
    ]);
  };
  const HandleAddNote = async () => {
    if (title === "") {
      showError("Title cannot be empty");
      return;
    }
    if (text === "") {
      showError("Text cannot be empty");
      return;
    }
    //TODO: add note
    addNote(title,text);
    props.toggleAddMode(false);
  };
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Add your note here !</Text>
      <TextInput
        style={styles.input}
        selectionColor={"#E3A72F"}
        activeOutlineColor={"#E3A72F"}
        mode="outlined"
        label="Title"
        returnKeyType="next"
        value={title}
        onChangeText={(text) => setTitle(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        selectionColor={"#E3A72F"}
        activeOutlineColor={"#E3A72F"}
        mode="outlined"
        label="text"
        returnKeyType="next"
        value={text}
        onChangeText={(text) => setText(text)}
        autoCapitalize="none"
      />

      <Pressable
        onPress={() => {
          HandleAddNote();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          props.toggleAddMode(false);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Return</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 26,
    color: "#E3A72F",
    fontWeight: "bold",
    paddingVertical: 12,
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
