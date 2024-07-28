import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";
import "./assets/css/fonts-face.css";
// user panel
import Layout from "./Layout";
import AddTask from "./components/AddTask";
import ContactApp from "./components/ContactApp";
import OurBlogs from "./components/OurBlogs";
import PageNotFound from "./components/PageNotFound";

// admin panel

import AdminLogin from "./components/admin/AdminLogin";
import AdminLayout from "./AdminLayout";
import ManageContacts from "./components/admin/ManageContacts";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* user panel */}

        <Route path="/" element={<Layout />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/contact-us" element={<ContactApp />} />
        <Route path="/our-blogs" element={<OurBlogs />} />

        {/* admin panel */}

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-login/dashboard" element={<AdminLayout />} />
        <Route path="/admin-login/manage-contact" element={<ManageContacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
