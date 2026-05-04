import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteALLUsersAPI, getALLUsersAPI } from "../services/allAPI";

function Dashboard() {
const[allUsers,setALLusers] = useState([])
console.log(allUsers);

useEffect(()=>{
  getUsers()
},[])

const getUsers = async ()=>{
  try{
    const result = await getALLUsersAPI()
    if (result.status==200){
      setALLusers(result.data)
    }

  }catch(err){
    console.log(err);
    
  }
}
const removeUser = async (id)=>{
  const result = await deleteALLUsersAPI(id)
  getUsers()
}


  return (
    <div className="container">
      {/* Title Section */}
      <div className="d-flex justify-content-between mt-5 align-items-center">
        <h1>Welcome ADMIN</h1>

        {/* ✅ ADD USER */}
        <Link to="/add" className="btn btn-primary">
          + ADD USER
        </Link>
      </div>

      <div className="m-5">
        <h3 className="text-center text-warning">ALL USERS LIST</h3>

        <table className="table table-hover my-5 shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>SALARY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
          {
            allUsers?.map(user=>(
              <tr key={user?._id}>
              <td>{user._id}</td>
              <td>{user?.username}</td>
              <td>{user?.email}</td>
              <td>{user?.salary}</td>

              <td>
                <div className="d-flex gap-3">
                  {/* ✅ EDIT */}
                  <Link to= {`/edit/${user?._id}`} className="btn btn-outline-warning btn-sm">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>

                  {/* DELETE */}
                  <button onClick={()=>removeUser(user?._id)}  className="btn btn-outline-danger btn-sm">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            ))

          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
