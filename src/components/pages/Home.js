import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../layout/Pagination";
import Pagination2 from "../layout/Pagination2";


function Home(props) {
  const [teachers, setUser] = useState([]);
  const [students, setUser1] = useState([]);
  const [currentPageT, setCurrentPageT] = useState(1);
  const [currentPageS, setCurrentPageS] = useState(1);
  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resultT = await axios.get(
      "https://62736209a6522e24ac46aea5.mockapi.io/teachers"
    );
    setUser(resultT.data.reverse());
    const resultS = await axios.get(
      "https://62736209a6522e24ac46aea5.mockapi.io/students"
    );
    setUser1(resultS.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://62736209a6522e24ac46aea5.mockapi.io/teachers/${id}`
    );
    loadUsers();
  };

  const deleteUser1 = async (id) => {
    await axios.delete(
      `https://62736209a6522e24ac46aea5.mockapi.io/students/${id}`
    );
    loadUsers();
  };

  // Get current users
  const teacherPerPage = 3;
  const indexOfLastTeacher = currentPageT * teacherPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teacherPerPage;
  const currentUsers = teachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

  const studentPerPage = 3;
  const indexOfLastStudent = currentPageS * studentPerPage;
  const indexOfFirstStudent = indexOfLastStudent -studentPerPage;
  const currentUser1 = students.slice(indexOfFirstStudent, indexOfLastStudent);
  // Change page
  const paginateT = (pageNumber) => setCurrentPageT(pageNumber);
  const paginateS = (pageNumber) => setCurrentPageS(pageNumber);

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="table-responsive col-md-6">
            <h1>Teachers's Data</h1>
            <table className="table border shadow">
              <thead className="table-dark text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {currentUsers.map((user) => (
                  <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        id="teachers"
                        className="btn btn-outline-dark m-1"
                        onClick={props.handleTarget}
                        to={`/users/${user.id}`}
                      >
                        View
                      </Link>
                      <Link
                        id="teachers"
                        className="btn btn-outline-primary m-1"
                        onClick={props.handleTarget}
                        to={`/users/edit/${user.id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-outline-danger m-1"
                        onClick={() => deleteUser(user.id)}
                        to="/"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              usersPerPage={teacherPerPage}
              totalUsers={teachers.length}
              paginateT={paginateT}
            />
            <div>
              <h4>Teacher's count = {teachers.length}</h4>
            </div>
          </div>
          <div className="table-responsive col-6">
            <h1>Student's Data</h1>
            <table className="table border shadow">
              <thead className="table-dark text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {currentUser1.map((user) => (
                  <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        id="students"
                        className="btn btn-outline-dark m-1"
                        onClick={props.handleTarget}
                        to={`/users/${user.id}`}
                      >
                        View
                      </Link>
                      <Link
                        id="students"
                        className="btn btn-outline-primary m-1"
                        onClick={props.handleTarget}
                        to={`/users/edit/${user.id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-outline-danger m-1"
                        onClick={() => deleteUser1(user.id)}
                        to="/"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination2
              usersPerPage={studentPerPage}
              totalUsers={students.length}
              paginateS={paginateS}
            />
            <div>
              <h4>Student's count = {students.length}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;