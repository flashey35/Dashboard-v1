import React from "react";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
      <h2>Dashboard</h2>

      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border-[2px] w-[400px] h-[150px] p-8 justify-center">
          <h2>Ronit Adhikari</h2>
          <p className="text-gray-500 mt-3">Your Expenses: Rs30,000</p>
        </div>
        <div className="flex flex-col rounded-md border-[2px] w-[400px] h-[150px] p-8 justify-center">
          <h2>Ronit Adhikari</h2>
          <p className="text-gray-500 mt-3">Your Savings: Rs5,00,000</p>
        </div>
      </div>
      <div className="flex space-x-8 py-6 w-4/5">
        <div className="flex flex-col rounded-md border-[3px] w-full p-8 justify-center">
          Expenses Graph
          <Chart />
        </div>
      </div>
      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border-[2px]  w-[400px] h-[200px] p-8 justify-center">
          <h2>Your Activity</h2>
          <li className="text-gray-500 mt-3">Sent Rs 1,00,000 to Friend</li>
          <li className="text-gray-500 mt-3">Sent Rs 1,00,000 to Mother</li>
        </div>
        <div className="flex flex-col rounded-md border-[2px] w-[400px] h-[200px] p-8 justify-center">
          <h2>Pending Bills</h2>
          <li className="text-gray-500 mt-3">Wifi bill: Rs 10,000</li>
          <li className="text-gray-500 mt-3">Electricity bill: Rs 1000</li>
          <li className="text-gray-500 mt-3">Water bill: Rs 100</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
