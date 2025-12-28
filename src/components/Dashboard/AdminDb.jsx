import CreatTask from "../AdminDb/CreatTask";
import AllTask from "../AdminDb/AllTask";

const AdminDb = ({adminData}) => {
    console.log(adminData);
    return (
       <>
       <CreatTask />
       <AllTask />
       </>
    );

}

export default AdminDb
