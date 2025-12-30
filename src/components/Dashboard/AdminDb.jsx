import CreatTask from "../AdminDb/CreatTask";
import AllTask from "../AdminDb/AllTask";
import { User } from "react-feather";
import { MdOutlineEditNote } from "react-icons/md";

const AdminDb = ({ adminData }) => {
  // console.log(adminData);

  return (
    <>
      <div>
        <div className="flex items-center gap-2 p-3 lg:pl-16 pt-6 text-gray-900 dark:text-gray-100 ">
          <MdOutlineEditNote size={40} />
          <h1 className="font-bold text-2xl ">Add New Task For Employee</h1>
        </div>
        <CreatTask />
      </div>
      <div className="mt-2 pb-8">
        <div className="flex items-center gap-2 p-3 lg:pl-16 pt-6 text-gray-900 dark:text-gray-100 ">
          <User strokeWidth={3} size={26} />
          <h1 className="font-bold text-2xl ">Employee Task Overview</h1>
        </div>
        <AllTask />
      </div>
      <div>{/* Employess FeedBack */}</div>
    </>
  );
};

export default AdminDb;