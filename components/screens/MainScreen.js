import React from "react";
import { StyleSheet, View, Text,ScrollView, Pressable, Image } from "react-native";
import MainHeader from "../MainHeader";
import Note from "../Note";
const MainScreen = (props) => {
  const email = props.user._tokenResponse.email;
  return (
    <View style={styles.container}>
        <MainHeader email={email} setUser={props.setUser}/>
      <Text style={styles.headerText}>Here are your notes ! </Text>
      <Pressable 
      style={styles.addButton}
        onPress={() => {
          addNote();
        }}
      >
        <Image style={styles.icon} source={require("../../assets/new.png")} />
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Note title={"Reminder"} text={"Take out the trash"} />
        <Note title={"Reminder"} text={"Take out the trashTake out the trashTake out the trash"} />
        <Note title={"Reminder"} text={"Take out the trash"} />
        <Note title={"Reminder"} text={"Take out the trashTake out the trashTake out the trashTake out the trashTake out the trashTake out the trash"} />
        <Note title={"Reminder"} text={"Take out the trashTake out the trashTake out the trashTake out the trashTake out the trashTake out the trash"} />
        <Note title={"Reminder"} text={"Take out the trashTake out the trashTake out the trashTake out the trashTake out the trashTake out the trash"} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    width: 250,
    height: 110,
    marginBottom: 8,
    resizeMode: "contain",
  },
  headerText: {
    width:"100%",
    textAlign:"center",
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
  addButton:{
    height:50,
    backgroundColor:"#E3A72F",
    alignSelf:"center"
  },
  scrollView:{
    alignItems:"center"
  }
});
export default MainScreen;
