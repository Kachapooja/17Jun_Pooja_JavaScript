import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import './assets/css/fonts-face.css'
import './assets/admin/css/style.css'
// user panel
import Layout from './Layout'
import AddTask from './components/AddTask'
import DeleteTask from './components/DeleteTask'
import ContactApp from './components/ContactApp'
import PageNotFound from './components/PageNotFound'
import OurBlogs from './components/OurBlogs'

// admin panel
import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './AdminLayout';
import ManageContacts from './components/admin/ManageContacts'
import DeleteContact from './components/admin/DeleteContact'
import AddBlogs from './components/admin/AddBlogs'
import ManageBlogs from './components/admin/ManageBlogs'
import DeleteBlogs from './components/admin/DeleteBlogs'
import UpdateBlogs from './components/admin/UpdateBlogs'
import EditTask from './components/EditTask'
import ContentApp from './components/ContentApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
     <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/manage-task' element={<ContentApp />} />

      <Route path='/add-task' element={<AddTask />} />
      <Route path='/delete-task/:id' element={<DeleteTask />} />
      <Route path='/edit-task/:id' element={<EditTask />} />

      <Route path='/our-blogs' element={<OurBlogs />} />
      <Route path='/contact-us' element={<ContactApp />} />
      <Route path='/admin-login' element={<AdminLogin />} />
      <Route path='/admin-login/dashboard' element={<AdminLayout />} />
      <Route path='/admin-login/manage-contact' element={<ManageContacts />} />
      <Route path='/admin-login/manage-contact/:id' element={<DeleteContact />} />
      <Route path='/admin-login/add-blogs' element={<AddBlogs />} />
      <Route path='/admin-login/manage-blogs' element={<ManageBlogs />} />
      <Route path='/admin-login/delete-blogs/:id' element={<DeleteBlogs />} />
      <Route path='/admin-login/edit-blogs/:id' element={<UpdateBlogs />} />
      <Route path='*' element={<PageNotFound />} />
     </Routes>
  </Router>
  </React.StrictMode>,
)
