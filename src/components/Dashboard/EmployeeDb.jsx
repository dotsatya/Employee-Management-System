import React, { useState, useEffect } from "react";
import TaskListNums from "../EmployeeDb/TaskListNums.jsx";
import EmployeeFB from "../EmployeeDb/EmployeeFB.jsx";
import TaskBoard from "../EmployeeDb/TaskBoard.jsx";

const EmployeeDb = ({ empData }) => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    if (empData?.tasks) {
      setTasks(empData.tasks);
    }
  }, [empData]);
  // console.log(empData.tasks);
  
  //for marking active tasks
  const startTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: "active" } : task
      )
    );
  };

  //for marking completed tasks
  const completeTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: "completed" } : task
      )
    );
  };

  //for marking failed tasks
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.status !== "completed" && task.status !== "failed") {
            const dueDate = new Date(task.date + "T00:00:00");
            const now = new Date();

            if (now > dueDate) {
              return { ...task, status: "failed" };
            }
          }
          return task;
        })
      );
    }, 1 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="pb-40">
        <TaskListNums tasksDataCount={tasks} />
        <TaskBoard
          activeTasks={tasks?.filter((task) => task.status === "active")}
          onComplete={completeTask}
          newTasks={tasks?.filter((task) => task.status === "new")}
          onStart={startTask}
        />
      </div>
      <EmployeeFB />
    </div>
  );
};

export default EmployeeDb;
