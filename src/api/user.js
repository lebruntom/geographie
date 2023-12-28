import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../utils/firebase.config";

export const changeUserPseudo = async (email, pseudo) => {
  const pseudoAlreadyExist = await checkIfPseudoAlreadyExist(pseudo);

  if (!pseudoAlreadyExist) {
    const userRef = collection(db, "user");
    await setDoc(doc(userRef, email), {
      email,
      pseudo,
    });

    return { message: `Mise à jour réussie`, type: "success" };
  } else {
    return {
      message: `Le pseudo ${pseudo} n'est pas disponible`,
      type: "warn",
    };
  }
};

export const getUserInfo = async (email) => {
  const docRef = doc(db, "user", email);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};

const checkIfPseudoAlreadyExist = async (pseudo) => {
  const userRef = collection(db, "user");
  const userQuery = query(userRef, where("pseudo", "==", pseudo));
  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.size > 0) {
    return true;
  }
  return false;
};

export const setUserScore = async (email, game, time, score) => {
  if (email) {
    const scoreISBetterThanOlder = await checkIfScoreIsBetterThanOlder(
      email,
      game,
      score
    );

    if (scoreISBetterThanOlder) {
      const userRef = collection(db, "user");
      await setDoc(
        doc(userRef, email),
        {
          [game]: {
            score,
            time,
          },
        },
        { merge: true }
      );
    }
  } else {
    localStorage.setItem(game, {
      score,
      time,
    });
  }
};

const checkIfScoreIsBetterThanOlder = async (email, game, score) => {
  const userInfo = await getUserInfo(email);

  if (userInfo[game] && parseInt(userInfo[game].score) > parseInt(score)) {
    return false;
  } else {
    return true;
  }
};
