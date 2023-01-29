import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { deleteNote } from "../utils/firebaseDataUtil";

export default function Note(props) {
  const data = props.data.item;
  const HandleDeleteNote = () => {
    props.setNotes(props.notes.filter((note) => note.id!=data.id));
    deleteNote(data.id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{data.title}</Text>
        <Text style={styles.textStyle}>{data.text}</Text>
      </View>
      <Pressable
        onPress={() => {
          HandleDeleteNote();
        }}
      >
        <Image style={styles.icon} source={require("../assets/delete.png")} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    backgroundColor: "#E3A72F",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  textContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  titleStyle: {
    fontSize: 23,
    color: "white",
    margin: 5,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 18,
    color: "white",
    margin: 5,
    marginBottom: 20,
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: "cover",
    marginRight:20
  },
});
