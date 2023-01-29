import React from "react";
import { useEffect, useState } from "react";
import { getNotes } from "../../utils/firebaseDataUtil";
import NotesView from "../NoteView";
import AddNoteForm from "../AddNoteForm";
const MainScreen = (props) => {
  const [notes, setNotes] = useState([]);
  const [addMode, toggleAddMode] = useState(false);
  console.log(notes);
  useEffect(() => {
    async function fetchData() {
      const notesObject = await getNotes();
      const newNotes = [];
      notesObject.forEach((doc) => {
        const note = {
          id: doc.id,
          title: doc.data().title,
          text: doc.data().text,
          time: doc.data().time
        };
        newNotes.push(note);
      });
      newNotes.sort(function(a, b) {
        if (a.time > b.time) return -1;
        if (a.time < b.time) return 1;
        return 0;
      });
      setNotes(newNotes);
    }
    fetchData();
  }, [addMode]);
  const email = props.user._tokenResponse.email;
  return (
    <>
      {addMode ? (
        <AddNoteForm toggleAddMode={toggleAddMode} />
      ) : (
        <NotesView email={email} setUser={props.setUser} notes={notes} setNotes={setNotes} toggleAddMode={toggleAddMode}/>
      )}
    </>
  );
};
export default MainScreen;
