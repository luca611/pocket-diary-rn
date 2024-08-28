import firestore from '@react-native-firebase/firestore';

export function addNewUser(userUid) {
    console.log("adding user " + userUid);
    firestore()
        .collection('users')
        .add({
            userUid: userUid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => alert("added user"))
        .catch((error) => console.log(error));
}
