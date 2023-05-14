import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Secondpage() {
  const [options, setOptions] = useState({
    fallAsleep: false,
    sleepThroughNight: false,
    wakeUpRefreshed: false,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setOptions((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const selectedOptions = Object.keys(options).filter((key) => options[key]);

    if (selectedOptions.length === 0) {
      toast.error("Please select at least one option");
      return;
    }

    axios
      .post("/api/changes/add", { id, changes: selectedOptions })
      .then((response) => {
        console.log("Changes submitted successfully:", response.data);
        navigate(`/question3/${id}`);
      })
      .catch((error) => {
        console.error("Error submitting changes:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="p-8 bg-gray-900 rounded-lg shadow-xl">
        <h2 className="text-white font-semibold mb-4">
          Let's say in a few weeks, you're sleeping well, What would change?
        </h2>
        <h3 className="text-white font-semibold mb-4">
          Select all the changes you would like to see
        </h3>
        <form onSubmit={handleSubmit}>
          <label className="block text-white mb-2">
            <input
              type="checkbox"
              name="fallAsleep"
              checked={options.fallAsleep}
              onChange={handleOptionChange}
            />
            <span className="ml-2">I would go to sleep easily</span>
          </label>
          <label className="block text-white mb-2">
            <input
              type="checkbox"
              name="sleepThroughNight"
              checked={options.sleepThroughNight}
              onChange={handleOptionChange}
            />
            <span className="ml-2">I would sleep through the night</span>
          </label>
          <label className="block text-white mb-2">
            <input
              type="checkbox"
              name="wakeUpRefreshed"
              checked={options.wakeUpRefreshed}
              onChange={handleOptionChange}
            />
            <span className="ml-2">I would wake up on time, refreshed</span>
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

export default Secondpage;
