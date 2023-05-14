import React, { useState } from "react";
import "../CSS/index.css";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Homepage() {
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!nickname) {
      toast.error("Please enter a nickname");
      return;
    }

    axios
      .post("api/nickname/add", { nickname })
      .then((response) => {
        const id = response.data.id;
        navigate(`/question2/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <p className="text-white text-center py-4">
        Hey, I am Deva! Backend dev @Wysa
      </p>
      <p className="text-white text-center py-4">
        {" "}
        Our conversations are private & anonymous, so there is no login. Just
        choose a nickname and we are good to go.
      </p>

      <form
        onSubmit={handleFormSubmit}
        className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nickname"
          >
            Enter your nickname:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nickname"
            type="text"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="Nickname"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            type="submit"
          >
            Let's go
          </button>
        </div>
      </form>
    </div>
  );
}

export default Homepage;
