import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Fourthpage() {
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedTime === "") {
      toast.error("Please select a sleep time");
      return;
    }

    axios
      .post(`/api/sleepTime/add`, {
        id,
        sleepTime: selectedTime,
      })
      .then((response) => {
        console.log("Sleep time submitted successfully:", response.data);
        navigate(`/question5/${id}`);
      })
      .catch((error) => {
        console.error("Error submitting sleep time", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="p-8 bg-gray-900 rounded-lg shadow-xl">
        <h2 className="text-white font-semibold mb-4">
          What time do you usually go to bed for sleep?
        </h2>
        <div className="flex items-center justify-center ">
          <div className="relative mr-4 ">
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="pl-2 border border-gray-500 rounded-md py-2 px-2 text-white bg-gray-800 w-32 text-center"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fourthpage;
