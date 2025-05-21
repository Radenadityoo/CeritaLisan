import firestore from '@react-native-firebase/firestore';

export const getCerita = async () => {
  const snapshot = await firestore().collection('cerita').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const postCerita = async (data) => {
  const docRef = await firestore().collection('cerita').add({
    ...data,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
  return docRef.id;
};

export const deleteCerita = async (id) => {
  await firestore().collection('cerita').doc(id).delete();
};

export const putCerita = async (id, data) => {
  await firestore().collection('cerita').doc(id).update(data);
};
