import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";
export default function AddTask() {
  return (
    <>
      <HeaderApp />
      <section id="task-manager-content" className="container mt-5 p-5">
        <Row>
          <div className="col-md-4 shadow bg-primary text-white p-5">
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
            <h1 className="fs-1 text-center">Add New Task</h1>
            <form method="post">
              <div className="input-group text-center w-75 mx-auto">
                <label className="input-group-item">
                  <span className="bi bi-pencil fs-3" />
                </label>
                <input
                  type="text"
                  name="newtaskname"
                  placeholder="New Task"
                  className="form-control border border-0  border-bottom"
                />
              </div>

              <div className="input-group text-center w-75 mx-auto mt-5">
                <label className="input-group-item">
                  <span className="bi bi-pencil fs-3" />
                </label>
                <input
                  type="date"
                  name="added-date"
                  placeholder="Added date"
                  className="form-control border border-0  border-bottom"
                />
              </div>

              <div className="input-group text-center w-75 mx-auto mt-5">
                <label className="input-group-item">
                  <span className="bi bi-pencil fs-3" />
                </label>
                <textarea
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="form-control border border-0  border-bottom"
                ></textarea>
              </div>
              <div className="input-group text-center w-75 mt-3 mx-auto">
                <button
                  type="submit"
                  name="submit"
                  placeholder="New Task"
                  className="btn btn-md w-100 btn-task-app ms-4"
                >
                  Create Task <span className="bi bi-send-arrow-down" />
                </button>
              </div>
            </form>
          </div>
        </Row>
      </section>
      <FooterApp />
    </>
  );
}
