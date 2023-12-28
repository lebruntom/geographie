import {
  collection,
  getDocs,
  limit,
  query,
  where,
  orderBy,
  startAfter,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../utils/firebase.config";

export const getScores = async (game, afterItem) => {
  const userRef = collection(db, "user");

  let userQuery = query(userRef, where(game, "!=", null), limit(10));

  if (afterItem) {
    afterItem = doc(db, "user", afterItem);
    const docSnap = await getDoc(afterItem);
    userQuery = query(
      userRef,
      where(game, "!=", null),
      orderBy(game),
      startAfter(docSnap),
      limit(10)
    );
  }

  const querySnapshot = await getDocs(userQuery);

  const scores = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    scores.push(data);
  });
  return scores;
};
