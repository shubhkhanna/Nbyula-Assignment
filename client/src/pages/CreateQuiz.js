import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/Input";

const CreateQuiz = () => {
  const [name, setName] = useState("");
  const [minPoints, setMinPoints] = useState();
  const [time, setTime] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-5 py-5 bg-gray-100">
      <div className="w-full max-w-md bg-white p-3 md:p-9 shadow-md rounded-xl">
        <form onSubmit={submitHandler} className="space-y-6">
          <Input
            label="Quiz Name*"
            placeholder="Enter Quiz Name"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Minimum Score*"
            placeholder="2"
            id="minPoints"
            name="minPoints"
            type="number"
            value={minPoints}
            onChange={(e) => setMinPoints(e.target.value)}
          />

          <Input
            label="Time in minutes*"
            placeholder="30"
            id="time"
            name="time"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <Button text="Create" />
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;
