import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";

function Home() {

  const [users, setUsers]=useState([]);

// const { id } = useParams();

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers=async()=>{
    const result=await axios.get(`http://localhost:8080/users`);
    setUsers(result.data);
    console.log(result.data);
  }

  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  < NavLink
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </NavLink>
                  <NavLink
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </NavLink>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home