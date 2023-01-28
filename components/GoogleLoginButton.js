import { StyleSheet, Image, Text, Pressable } from "react-native";
export default function GoogleLoginButton(props) {
  return (
    <Pressable
      onPress={() => {
        props.setLoginMethod("");
      }}
      style={styles.googleButton}
    >
      <Image
        style={styles.googleLogoStyle}
        source={require("../assets/google.logo.png")}
      />
      <Text style={styles.googleButtonText}>Login with Google</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#E3A72F",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    margin: 8,
    flexDirection: "row",
    width: "80%",
    height: 70,
  },
  googleButtonText: {
    fontSize: 18,
    color: "#E3A72F",
  },
  googleLogoStyle: {
    height: 30,
    width: 30,
    resizeMode: "cover",
    marginRight: 20,
  },
});
