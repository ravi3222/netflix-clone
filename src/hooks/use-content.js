import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  console.log(target, content);
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        console.log("All content", allContent);
        setContent(allContent);
        console.log("Setcontent", setContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [firebase, target]);
  return { [target]: content };
}
