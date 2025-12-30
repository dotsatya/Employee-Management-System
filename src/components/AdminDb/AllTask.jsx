import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import TaskStatusBar from "./TaskStatusBar";
import { useState } from "react";
import PopUpAllTaskStatus from "./PopUpAllTaskStatus";
import ButtonForPopUp from "./ButtonForPopUp";

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  return (
    <>
      <div className=" flex flex-row items-center justify-center">
        <table className=" w-full sm:w-[95%] md:w-[90%] lg:w-[85%] table-fixed border-separate border-spacing-y-2">
          <thead>
            <tr className=" backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200/60 dark:border-zinc-700/60  text-xs sm:text-sm  font-semibold  uppercase  tracking-wide  text-gray-700 dark:text-gray-300 ">
              <th className="lg:w-[15%] hidden lg:table-cell md:table-cell px-6 py-3 text-center rounded-bl-xl">E ID</th>
              <th className="lg:w-[40%] px-6 py-3 text-center ">Name</th>
              <th className="lg:w-[20%] px-6 py-3 text-center">Total Tasks</th>
              <th className="hidden lg:table-cell lg:w-[20%] pl-3 px-6 py-3 text-center wrap-break-word rounded-br-xl">Completed</th>   
              {/* <th className="px-6 py-3 text-center ">View</th> */}
            </tr>
          </thead>

          <tbody>
            {userData?.employees?.map((employee) => (
              <TaskStatusBar key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>

        <div className="flex flex-col pt-8">
          {userData?.employees?.map((employee) => (
            <ButtonForPopUp key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTask;
