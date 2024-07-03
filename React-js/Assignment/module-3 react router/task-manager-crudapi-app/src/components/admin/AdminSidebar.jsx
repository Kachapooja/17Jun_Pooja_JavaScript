import React from 'react'

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar bg-dark col-md-2 m-0 p-3">
  <ul className="sidebar-link m-0 p-0">
    <li>
      <a href="#">
        <img
          src="https://icon-library.com/images/admin-login-icon/admin-login-icon-11.jpg"
          className="img-fluid w-50 "
        />
      </a>
    </li>
    <li>
      <a href="#">
        <span className="bi bi-person" />ManageUsers
      </a>
    </li>
  
    <li>
      <a href="#">
        <span className="bi bi-bell" /> Manage All Task
      </a>
    </li>
    <li className='dropdown'><a className='dropdown-toggle' data-bs-toggle="dropdown" href="#"><span className="bi bi-book" /> AddBlogs</a>
    <ul className='dropdown-menu'>
      <li><a href='/admin-login/add-blogs'>Add Blogs</a></li>
      <li><a href='/admin-login/manage-blogs'>Manage Blogs</a></li>
    </ul>
    </li>
    <li>
      <a href="/admin-login/manage-contact">
        <span className="bi bi-phone" /> Manage Contacts
      </a>
    </li>
    {/* <li><a href="#" class="btn btn-sm btn-danger text-white" onclick="return confirm('Are you sure to Logout ?')"><span class="bi bi-power"></span> Logout ?</a></li> */}
    <li>
      <a
        href="#"
        className="btn btn-sm btn-danger text-white"
        data-bs-toggle="modal"
        data-bs-target="#lg"
      >
        <span className="bi bi-power" /> Logout ?
      </a>
    </li>
  </ul>
</div>

  )
}
