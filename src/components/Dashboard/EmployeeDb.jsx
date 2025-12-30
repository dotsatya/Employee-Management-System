import { useState, useEffect, useContext } from "react";
import TaskListNums from "../EmployeeDb/TaskListNums.jsx";
import EmployeeFB from "../EmployeeDb/EmployeeFB.jsx";
import TaskBoard from "../EmployeeDb/TaskBoard.jsx";
import { AuthContext } from "../../context/AuthProvider.jsx";

const EmployeeDb = ({ employeeData }) => {
  const { userData, setUserData } = useContext(AuthContext);
  const empData = userData?.employees?.find((e) => e.id === employeeData.id);

  // console.log(empData.tasks); 

const [tasks, setTasks] = useState(() => empData?.tasks || []);

  // useEffect(() => {
  //   if (empData?.tasks) {
  //     setTasks(empData.tasks);
  //   }
  // }, [empData]);
  // // console.log(empData.tasks);

  //for marking active tasks
  const startTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, status: "active" } : task
    );
    setTasks(updated);
    setUserData({
      ...userData,
      employees: userData.employees.map((emp) =>
        emp.id === employeeData.id ? { ...emp, tasks: updated } : emp
      ),
    });
  };

  //for marking completed tasks
  const completeTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, status: "completed" } : task
    );
    setTasks(updated);
    setUserData({
      ...userData,
      employees: userData.employees.map((emp) =>
        emp.id === employeeData.id ? { ...emp, tasks: updated } : emp
      ),
    });
  };

  //for marking failed tasks
useEffect(() => {
  const interval = setInterval(() => {
    setTasks((prev) => {
      let changed = false;

      const updated = prev.map((task) => {
        if (task.status !== "completed" && task.status !== "failed") {
          const dueDate = new Date(task.date + "T00:00:00");
          if (new Date() > dueDate) {
            changed = true;
            return { ...task, status: "failed" };
          }
        }
        return task;
      });

      return changed ? updated : prev;
    });
  }, 6 * 1000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  setUserData((prev) => {
    const emp = prev.employees.find(
      (e) => e.id === employeeData.id
    );

    // 🔒 Guard: prevent infinite loop
    if (JSON.stringify(emp.tasks) === JSON.stringify(tasks)) {
      return prev; // ⛔ no update
    }

    return {
      ...prev,
      employees: prev.employees.map((e) =>
        e.id === employeeData.id ? { ...e, tasks } : e
      ),
    };
  });
}, [tasks, employeeData.id]);

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
