import React from "react";
import { useState } from "react";

function AgeCalculator() {
  const [birthDate, setBirthdate] = useState(0);
  const [age, setAge] = useState(0);

  const ageCalculator = () => {
    const today = new Date();
    const birthDatecount = new Date(birthDate);

    const finalAge = today.getFullYear() - birthDatecount.getFullYear();
    const monthCal = today.getMonth() - birthDatecount.getMonth();


    setBirthdate(finalAge);
    setAge(monthCal)
  };
  const resetCalculator = () => {
    setBirthdate("");
    setAge(0);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from to-blue-100 to blue-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Age Calculator
        </h2>
        <p className="text-red-800 text-center mb-6">
          Calculte your age by entering your date of birth aate
        </p>

        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              Date of Birth
            </h4>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className=" flex justify-around">
            <button
              className="bg-red-700 rounded-md p-2 text-white w-32"
              onClick={ageCalculator}
            >
              Age Calculator
            </button>
            <button className="bg-gray-400 rounded-md p-2 w-32" onClick={resetCalculator}>Reset</button>
          </div>

          <div className="text-center">
            <h3 className="text-red-700 text-2xl">Your Age is</h3>
            <h1 className="text-blue-950-700 text-3xl">{birthDate} Years {age} Months</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
