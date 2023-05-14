import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Thirdpage() {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedOption) {
      toast.error("Please select an option");
      return;
    }

    axios
      .post(`/api/strugleDuration/add`, {
        id,
        struggle: selectedOption,
      })
      .then((response) => {
        console.log("Struggle submitted successfully:", response.data);
        navigate(`/question4/${id}`);
      })
      .catch((error) => {
        console.error("Error submitting struggle", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="p-8 bg-gray-900 rounded-lg shadow-xl">
        <h2 className="text-white font-semibold mb-4">
          That's a great goal. How long have you been struggling with your
          sleep?
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-white mb-2">
            <input
              type="radio"
              name="struggle"
              value="Less than 2 weeks"
              checked={selectedOption === "Less than 2 weeks"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">Less than 2 weeks</span>
          </label>
          <label className="block text-white mb-2">
            <input
              type="radio"
              name="struggle"
              value="2 to 8 weeks"
              checked={selectedOption === "2 to 8 weeks"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">2 to 8 weeks</span>
          </label>
          <label className="block text-white mb-2">
            <input
              type="radio"
              name="struggle"
              value="More than 8 weeks"
              checked={selectedOption === "More than 8 weeks"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">More than 8 weeks</span>
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Thirdpage;
