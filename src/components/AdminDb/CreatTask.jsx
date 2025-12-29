import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreatTask = () => {
  
  const [newTaskTitle, setNewTaskTitle] = React.useState("");
  const [newTaskDate, setNewTaskDate] = React.useState("");
  const [newTaskEmployeeId, setNewTaskEmployeeId] = React.useState("");
  const [newTaskEmployeeName, setNewTaskEmployeeName] = React.useState("");
  const [newTaskCategory, setNewTaskCategory] = React.useState("");
  const [newTaskDescription, setNewTaskDescription] = React.useState("");
  
  const { userData, setUserData } = useContext(AuthContext);

  ////// NEW giving task id 
  const generateTaskId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};


  const handleCreateNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: generateTaskId(),
      title: newTaskTitle,
      date: newTaskDate,
      // employeeId: newTaskEmployeeId,
      // employeeName: newTaskEmployeeName,
      category: newTaskCategory,
      description: newTaskDescription,
      status: "new",
    };
    setNewTaskTitle("");
    setNewTaskDate("");
    setNewTaskEmployeeId("");
    setNewTaskEmployeeName("");
    setNewTaskCategory("");
    setNewTaskDescription("");
    const updatedEmployees = userData.employees.map((employee) =>
      employee.id === Number(newTaskEmployeeId)
        ? { ...employee, tasks: [...employee.tasks, newTask] } // NEW reference
        : employee
    );

    setUserData({
      ...userData,
      employees: updatedEmployees,
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <>
      <div className="flex items-center justify-center px-6">
        <form
          onSubmit={(e) => {
            handleCreateNewTask(e);
          }}
          className="
            w-full max-w-6xl
            bg-white
            dark:bg-[#0b0b0b]/60 backdrop-blur-xl
            rounded-2xl
            p-5 sm:p-8
            grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8
            border border-gray-300 dark:border-zinc-800
            shadow-md
            dark:shadow-2xl
            transition-all duration-300 hover:-translate-y-1
          "
        >
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {/* Task Title */}
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="
                  w-full rounded-lg px-4 py-2.5
                  bg-gray-100 dark:bg-zinc-900
                  border border-gray-300 dark:border-zinc-700
                  text-gray-900 dark:text-zinc-100
                  placeholder:text-gray-400 dark:placeholder:text-zinc-500
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/70
                  focus:border-emerald-500
                  transition
                "
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
            </div>

            {/* Date */}
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Date
              </label>
              <input
                type="date"
                className="
                  w-full rounded-lg px-4 py-2.5
                  bg-gray-100 dark:bg-zinc-900
                  border border-gray-300 dark:border-zinc-700
                  text-gray-900 dark:text-zinc-100
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/70
                  focus:border-emerald-500
                  transition
                "
                value={newTaskDate}
                onChange={(e) => setNewTaskDate(e.target.value)}
              />
            </div>

            {/* Assign To */}
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Assign to
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Employee ID"
                  className="
                    w-full rounded-lg px-4 py-2.5
                    bg-gray-100 dark:bg-zinc-900
                    border border-gray-300 dark:border-zinc-700
                    text-gray-900 dark:text-zinc-100
                    placeholder:text-gray-400 dark:placeholder:text-zinc-500
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500/70
                    focus:border-emerald-500
                    transition
                  "
                  value={newTaskEmployeeId}
                  onChange={(e) => setNewTaskEmployeeId(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Employee Name"
                  className="
                    w-full rounded-lg px-4 py-2.5
                    bg-gray-100 dark:bg-zinc-900
                    border border-gray-300 dark:border-zinc-700
                    text-gray-900 dark:text-zinc-100
                    placeholder:text-gray-400 dark:placeholder:text-zinc-500
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500/70
                    focus:border-emerald-500
                    transition
                  "
                  value={newTaskEmployeeName}
                  onChange={(e) => setNewTaskEmployeeName(e.target.value)}
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Category
              </label>
              <input
                type="text"
                placeholder="Design, Development, etc"
                className="
                  w-full rounded-lg px-4 py-2.5
                  bg-gray-100 dark:bg-zinc-900
                  border border-gray-300 dark:border-zinc-700
                  text-gray-900 dark:text-zinc-100
                  placeholder:text-gray-400 dark:placeholder:text-zinc-500
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/70
                  focus:border-emerald-500
                  transition
                "
                value={newTaskCategory}
                onChange={(e) => setNewTaskCategory(e.target.value)}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            {/* Description */}
            <div className="flex-1">
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Description
              </label>
              <textarea
                className="
                  w-full h-[90%] md:h-[96%]
                  rounded-lg px-4 py-3
                  bg-gray-100 dark:bg-zinc-900
                  border border-gray-300 dark:border-zinc-700
                  text-gray-900 dark:text-zinc-100
                  placeholder:text-gray-400 dark:placeholder:text-zinc-500
                  resize-none
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/70
                  focus:border-emerald-500
                  transition
                "
                placeholder="Write task details here..."
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full rounded-lg py-3 mt-2
                bg-emerald-500 hover:bg-emerald-600
                dark:bg-emerald-600 dark:hover:bg-emerald-500
                text-white font-semibold
                shadow-md
                transition active:scale-[0.97]
              "
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatTask;
