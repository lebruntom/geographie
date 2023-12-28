import React, { useContext } from "react";
import crown from "../../assets/img/crown.svg";
import { AuthContext } from "../../store/AuthContext";
const Score = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="relative w-full h-[450px] rounded-[10px]">
      <div className="bg-yellow w-full h-[75px] rounded-lg">
        <div className="text-blue text-lg font-bold px-4 py-2">
          Meilleurs scores
        </div>
        <div className="ml-[200px]">
          {currentUser
            ? currentUser.user
            : "Connecter vous pour voir votre score"}
        </div>
      </div>
      <div className="w-[75px] h-[75px] rounded-lg bg-orange absolute top-[40px] left-[100px] text-blue text-2xl font-bold flex items-center justify-center">
        {currentUser && (
          <div>
            2 <span className="text-xs">eme</span>
          </div>
        )}
      </div>

      {/* <table className="mt-[55px] w-full bg-opacity-25 bg-blur-2xl border border-white bg-white rounded-lg"> */}

      <div class="mt-[55px] relative overflow-x-auto rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
          <thead class="text-xs text-gray-700 uppercase bg-opacity-70 bg-blur-2xl  bg-white2">
            <tr>
              <th scope="col" class="px-6 py-3">
                Position
              </th>
              <th scope="col" class="px-6 py-3">
                Pseudo
              </th>
              <th scope="col" class="px-6 py-3">
                Temps
              </th>
              <th scope="col" class="px-6 py-3">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-opacity-25 bg-blur-2xl bg-white text-sm">
              <th
                scope="row"
                class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
              >
                <img src={crown} alt="crown icon" />
              </th>
              <td class="px-6 py-2">Silver</td>
              <td class="px-6 py-2">2m35</td>
              <td class="px-6 py-2">75%</td>
            </tr>
            <tr className="bg-opacity-30 bg-blur-2xl bg-white text-sm">
              <th
                scope="row"
                class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
              >
                <div>2</div>
              </th>
              <td class="px-6 py-2">LoLo de nono</td>
              <td class="px-6 py-2">3m14</td>
              <td class="px-6 py-2">59%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Score;
