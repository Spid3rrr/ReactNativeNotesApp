import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function MainHeader(props) {
    const logout = () => {
        props.setUser(null);
    }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Logged in as {props.email}</Text>
      <Pressable onPress={()=>{logout()}}>
      <Image
        style={styles.logoutStyle}
        source={require("../assets/logout.png")}
      />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3A72F",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    marginTop: 30,
    flexDirection: "row",
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
  logoutStyle: {
    height: 25,
    width: 25,
    margin: 10,
    resizeMode: "cover",
  },
});
