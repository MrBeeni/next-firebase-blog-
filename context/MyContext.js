import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "@/firebaseConfig";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      image: user.photoURL,
    });
  };

  const handleUserAuth = async () => {
    const result = await signInWithPopup(auth, provider);
    const userData = result.user;
    setCurrentUser(userData);
    addUserToFirebase(userData);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        console.log(querySnapshot);
        setUser(
          querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        console.log(querySnapshot);
        setPosts(
          querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <MyContext.Provider value={{ user, posts, handleUserAuth, currentUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
