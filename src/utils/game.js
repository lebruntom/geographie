import { changeUserPseudo } from "../api/user";

export const generateAndRegisterUserPseudo = async (email) => {
  const base = email.substr(0, 2);
  const randomStr = randomBase58String(8);
  const pseudo = base + randomStr;

  await changeUserPseudo(email, pseudo);
};

export const calculateSuccessPercentage = (goodAnswers, totalQuestions) => {
  const successPct = (goodAnswers * 100) / totalQuestions;
  const formattedPct = parseFloat(successPct.toFixed(2));

  return Math.round(formattedPct * 100) / 100;
};

const base58Chars =
  "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
export const randomBase58String = (length) => {
  const nbChars = base58Chars.length;
  let rslt = "";
  for (let i = 0; i < length; i += 1) {
    rslt += base58Chars.charAt(Math.floor(Math.random() * nbChars));
  }
  return rslt;
};
