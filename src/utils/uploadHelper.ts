import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "the-wild-oasis-426315.firebaseapp.com",
  projectId: "the-wild-oasis-426315",
  storageBucket: "the-wild-oasis-426315.appspot.com",
  messagingSenderId: "884217541973",
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadToFirebase = async (file: File) => {
  const storageRef = ref(storage, `blog-images/${Date.now()}-${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref); // Returns the file URL
};
