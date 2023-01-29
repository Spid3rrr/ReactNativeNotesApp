import React from "react";
import { StyleSheet, View, Text, Pressable, Image, FlatList } from "react-native";
import MainHeader from "./MainHeader"
import Note from "./Note";

export default function NotesView(props){
    return <View style={styles.container}>
        <MainHeader email={props.email} setUser={props.setUser}/>
      <Text style={styles.headerText}>Here are your notes ! </Text>
      <Pressable 
      style={styles.addButton}
        onPress={() => {
          props.toggleAddMode(true);
        }}
      >
        <Image style={styles.icon} source={require("../assets/new.png")} />
      </Pressable>
      <FlatList contentContainerStyle={styles.scrollView} 
       data={props.notes}
       renderItem={(note) => <Note data={note} notes={props.notes} setNotes={props.setNotes}/>}
       keyExtractor={note => note.id}
      />
    </View>
}

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
      alignSelf:"center",
      margin:20
    },
    scrollView:{
      alignItems:"center"
    }
  });