import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDb from "./components/Dashboard/EmployeeDb";
import Header from "./components/others/Header";
import AdminDb from "./components/Dashboard/AdminDb";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  // --------------------------------------
  // localStorage.clear();

  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  // ---------------------------------------

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext); //getting data from context
  // console.log(authData.userData.employees.find((e)=> e.email == email && e.password == password ));

  // useEffect(() => {
  //   if (authData) {
  //     const logedInUser = localStorage.getItem("logedInUser");
  //     if (logedInUser) {
  //       setUser(logedInUser.role);
  //     }
  //   }
  // }, [authData])

useEffect(() => {
  if (!authData?.userData) return;

  const saved = localStorage.getItem("session");
  if (!saved) return;

  const { role, id } = JSON.parse(saved);

  if (role === "admin") {
    const admin = authData.userData.admins?.find(a => a.id === id);
    if (admin) setUser({ role, data: admin });
  }

  if (role === "employee") {
    const employee = authData.userData.employees?.find(e => e.id === id);
    if (employee) setUser({ role, data: employee });
  }
}, [authData]);


const handleLogin = (email, password) => {
  if (!authData?.userData) return;

  // ADMIN
  const admin = authData.userData.admins?.find(
    a => a.email === email && a.password === password
  );

  if (admin) {
    const session = { role: "admin", id: admin.id };
    localStorage.setItem("session", JSON.stringify(session));
    setUser({ role: "admin", data: admin });
    return;
  }

  // EMPLOYEE
  const employee = authData.userData.employees?.find(
    e => e.email === email && e.password === password
  );

  if (employee) {
    const session = { role: "employee", id: employee.id };
    localStorage.setItem("session", JSON.stringify(session));
    setUser({ role: "employee", data: employee });
    return;
  }

  alert("Invalid credentials");
};

const handleLogOut = () => {
  localStorage.removeItem("session");
  setUser(null);
};

  return (
    <>
      <div className={isDark ? "dark" : ""}>
        <div className="min-h-screen bg-gray-200 dark:bg-[#0b0b0b] ">
          <Header
            dark={isDark}
            toggleTheme={toggleTheme}
            user={user}
            setUser={setUser}
            handleLogOut={handleLogOut}
            empData={user?.data}
            adminData={user?.data}
          />

          {!user ? <Login handleLogIn={handleLogin} /> : ""}

          <main className="mt-6 px-10">
            {user?.role === "admin" && <AdminDb adminData={user?.data}/>}
            {user?.role === "employee" && <EmployeeDb empData={user?.data} />}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
