import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getScores } from "../api/score";
import { useSearchParams } from "react-router-dom";
import { number } from "yup";

const Scores = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState([{ number: 1, email: null }]);
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const gameScore = searchParams.get("regions") ? "regions" : "departements";

    getScores(gameScore, page[page.length - 1].email).then((res) => {
      setScores(res);
    });
  }, [searchParams, page]);

  const handleChangePage = (step) => {
    if (step === "next") {
      setPage(
        (ps) => (
          ps,
          [
            {
              number: ps[ps.length - 1].number + 1,
              email: scores[scores.length - 1].email,
            },
          ]
        )
      );
    } else if (step === "prev" && page[page.length - 1].number === 2) {
      setPage({ number: 1, email: null });
    } else if (step === "prev") {
      setPage((ps) => [...ps.filter((pg, idx) => idx < page.length - 1)]);
    }
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select your country
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Profile</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full">
          <Link
            to="/scores"
            className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50  focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Départements
          </Link>
        </li>
        <li className="w-full">
          <Link
            to={"/scores?regions=true"}
            className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Régions
          </Link>
        </li>
      </ul>

      <div className="w- text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <div className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          <svg
            className="w-3 h-3 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          Profile
        </div>
        <div
          type="button"
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          <svg
            className="w-3 h-3 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
            />
          </svg>
          Settings
        </div>
      </div>
      {page[page.length - 1].number !== 1 && (
        <button type="button" onClick={() => handleChangePage("prev")}>
          prev
        </button>
      )}
      <button type="button" onClick={() => handleChangePage("next")}>
        next
      </button>
    </div>
  );
};

export default Scores;
