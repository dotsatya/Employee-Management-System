import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import TaskStatusBar from "./TaskStatusBar";
import { useState } from "react";
import PopUpAllTaskStatus from "./PopUpAllTaskStatus";
import ButtonForPopUp from "./ButtonForPopUp";

const AllTask = () => {
  const { userData } = useContext(AuthContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <>
      <div className=" flex flex-row items-center justify-center">
        <table className=" w-full sm:w-[95%] md:w-[90%] lg:w-[85%] table-fixed border-separate border-spacing-y-2">
          <thead>
            <tr className=" backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200/60 dark:border-zinc-700/60  text-xs sm:text-sm  font-semibold  uppercase  tracking-wide  text-gray-700 dark:text-gray-300 ">
              <th className="lg:w-[10%] hidden lg:table-cell md:table-cell px-6 py-3 text-center rounded-bl-xl">E ID</th>
              <th className="lg:w-[40%] px-6 py-3 text-center ">Name</th>
              <th className="lg:w-[20%] px-6 py-3 text-center">Total Tasks</th>
              <th className="hidden lg:table-cell lg:w-[20%] pl-3 px-6 py-3 text-center wrap-break-word ">Completed</th>   
              <th className="px-6 py-3  lg:w-[10%]  text-center rounded-br-xl ">Details</th>
            </tr>
          </thead>

          <tbody>
            {userData?.employees?.map((employee) => (
              <TaskStatusBar key={employee.id} employee={employee} 
                onView={() => setSelectedEmployee(employee)} />
            ))}
          </tbody>
        </table>

      </div>
      
      {/* ✅ POPUP OUTSIDE TABLE */}
      {selectedEmployee && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setSelectedEmployee(null)}
          />
          <PopUpAllTaskStatus
            employee={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
          />
        </>
      )}
    </>
  );
};

export default AllTask;
