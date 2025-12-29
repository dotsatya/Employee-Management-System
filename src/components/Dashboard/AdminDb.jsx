import CreatTask from "../AdminDb/CreatTask";
import AllTask from "../AdminDb/AllTask";

const AdminDb = ({ adminData }) => {
    // console.log(adminData);

    return (
        <>
            <div>
                <h1 className="font-bold text-2xl pb-4 lg:pl-16  text-gray-900 dark:text-gray-100 ">
                    Create Task For Employee
                </h1>
                <CreatTask />
            </div>
            <div className="mt-2 pb-8">
                <h1 className="font-bold text-2xl p-3 lg:pl-16 pt-6 text-gray-900 dark:text-gray-100 ">
                    All Assigned Tasks
                </h1>
                <AllTask />
            </div>
            <div>
                {/* Employess FeedBack */}
            </div>
        </>
    );
};

export default AdminDb;
