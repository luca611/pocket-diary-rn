import firebase from "firebase/compat/app";

export function addNewUser(userUid) {
  return firebase.firestore()
  .collection("Users") //section name in firestore
  .add(userUid);       //add userUid to firestore
}

export function addNoteToUser(userUid, note) {
  return firebase.firestore()
  .collection("Users")
  .doc(userUid)
  .collection("Notes")
  .add(note);
}

export function getNotes(userUid) {
  return firebase.firestore()
  .collection("Users")
  .doc(userUid)
  .collection("Notes")
  .get();
}