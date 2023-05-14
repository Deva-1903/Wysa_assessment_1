import React, { useEffect } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const WysaPage = () => {
  const wysaUser = JSON.parse(localStorage.getItem("wysaUser"));
  console.log(wysaUser);
  const { id, nickname } = wysaUser;
  const navigate = useNavigate();

  const handleDelete = () => {
    localStorage.removeItem("wysaUser");

    axios
      .delete(`api/user?id=${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <h1 className="text-4xl text-white font-bold mb-8">
        Welcome to Wysa, {nickname}!
      </h1>
      <button
        className="bg-white text-blue-600 py-2 px-4 rounded-full font-bold shadow-lg hover:bg-blue-600 hover:text-white transition duration-200"
        onClick={handleDelete}
      >
        Delete Data
      </button>
    </div>
  );
};

export default WysaPage;
