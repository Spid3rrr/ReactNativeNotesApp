import {
  getFirestore,
  collection,
  orderBy,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
  Timestamp
} from "firebase/firestore";
import app from "../firebaseConfig";

const db = getFirestore(app);

export async function getNotes() {
  const querySnapshot = await getDocs(collection(db, "notes"), orderBy("time","asc"));
  return querySnapshot;
}

export async function addNote(title, text) {
  const docRef = await addDoc(collection(db, "notes"), {
    title: title,
    text: text,
    time: Date.now()
  });
  console.log(docRef);
  console.log("Document written with ID: ", docRef.id);
}

export async function deleteNote(id) {
    await deleteDoc(doc(db, "notes", id));
}