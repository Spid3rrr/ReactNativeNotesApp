import { StyleSheet, Text, Pressable } from "react-native";

export default function EmailLoginButton(props) {
  return (
    <Pressable
      onPress={() => {
        props.setLoginMethod("email");
      }}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Login with email</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E3A72F",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    margin: 8,
    width: "80%",
    height: 70,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
