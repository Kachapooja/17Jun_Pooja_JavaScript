import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'

export default function ManageContacts() {

// destructuring data








  return (
<>

    <AdminHeader />
    <section id="dashboard-content" >
    <div className="container-fluid m-0 p-0">
    <div className="row">
    <AdminSidebar />
    <div className="admin-dashboard col-md-10 p-3">
    <h2 className="ms-3 p-4 mt-3">Manage Contacts all data 
    </h2>
    <hr className="border border-1 border-dark w-50 ms-5" align="left" />
     
    <table className="table w-100" id='example'>
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Subject</th>
      <th scope="col">Phone</th>
      <th scope="col">Message</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
 
   
    <tr>
   
      <td>1001</td>
      <td>a@gmail.ciom</td>
      <td>hi</td>
      <td>98121221</td>
      <td>hi brijesh</td>
      <td><button type='button' className='btn btn-danger text-white btn-sm'><i className='bi bi-trash'></i></button></td>
    </tr>
   

  </tbody>
</table>
</div>
</div>
</div>
</section>


    
<AdminFooter />
</>
  )
}
