import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ContentApp() {
  return (
    <>
      <section id="task-manager-content" className="container mt-5 p-5">
        <Row>
          <div className="col-md-4 shadow p-5 bg-success text-white">
            <h2>Manage Task</h2>
            <ul className="sidebar">
              <li>
                <Link to="/add-task">Add Tasks</Link>
              </li>
              <li>
                <Link to="/">Manage Tasks</Link>
              </li>
              <li>
                <Link to="/delete-task">Delete Tasks</Link>
              </li>
              <li>
                <Link to="/update-task">Update Tasks</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-7 ms-5">
            {/* display task */}
            <h1 className="fs-1 text-center mt-0">Display Task</h1>
            <table
              align="center"
              className="table mt-5 table-responsive w-100 table-striped table-hover"
            >
              <tbody>
                <tr className="bg-dark text-white">
                  <th>#</th>
                  <th>TaskName</th>
                  <th>Added Date</th>
                  <th>Descriptions</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>101</td>
                  <td>React Js</td>
                  <td>02-05-2024</td>
                  <td>good</td>
                  <td>
                    <a
                      href=""
                      className="btn btn-danger text-white rounded-circle w-0"
                    >
                      <span className="bi bi-trash" />
                    </a>{" "}
                    |{" "}
                    <a
                      href=""
                      className="btn btn-primary text-white rounded-circle w-0"
                    >
                      <span className="bi bi-pencil" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
      </section>
    </>
  );
}
