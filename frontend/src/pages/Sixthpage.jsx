import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SixthPage() {
  const [selectedHours, setSelectedHours] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleHoursChange = (event) => {
    setSelectedHours(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedHours === 0) {
      toast.error("Please choose any one option");
      return;
    }

    axios
      .post(`/api/sleepHours/add`, {
        id,
        sleepHours: selectedHours,
      })
      .then((response) => {
        console.log("Sleep duration submitted successfully:", response.data);
        navigate(`/result/${id}`);
      })
      .catch((error) => {
        console.error("Error submitting sleep duration", error);
      });
  };

  const options = [];
  for (let i = 1; i <= 12; i++) {
    options.push(
      <option key={i} value={i}>
        {i} hrs
      </option>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="p-8 bg-gray-900 rounded-lg shadow-xl">
        <h2 className="text-white font-semibold mb-4">
          Ok. How many hours of sleep do you get in a typical night?
        </h2>
        <div className="flex items-center justify-center ">
          <div className="relative mr-4">
            <select
              value={selectedHours}
              onChange={handleHoursChange}
              className="border border-gray-500 rounded-md py-2 px-2 text-white bg-gray-800 text-center"
            >
              {options}
            </select>
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

export default SixthPage;
