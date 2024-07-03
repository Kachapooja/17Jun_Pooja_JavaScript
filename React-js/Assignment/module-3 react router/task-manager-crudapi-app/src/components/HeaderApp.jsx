import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderApp() {
  return (
    <>
        
<section id="task-manager-header" className="nav navbar navbar-expand-md">
<button
type="button"
className="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#togg"
>
<span className="bi bi-grid" />
</button>
<div className="row collapse navbar-collapse" id="togg">
<div className="col-md-6 p-3">
<strong className="ms-5 fs-3 text-white">
<span className="bi bi-list-task" />
&nbsp;Task Manager
</strong>
</div>
<div className="col-md-6 p-3">
<Link to='/add-task'><button type="button" className="btn btn-md btn-task">
Add Tasks <span className="bi bi-list-task" />
</button></Link>

<Link to='/our-blogs'><button type="button" className="btn btn-md btn-task ms-3">
Blogs <span className="bi bi-list-task" />
</button></Link>


<button type="button" className="btn btn-md btn-task ms-5">
Deleted Tasks <span className="bi bi-x-lg text-danger" />
</button>

<Link to='/contact-us'><button type="button" className="btn btn-md btn-task ms-5">
Contact us <span className="bi bi-x-lg text-danger" />
</button></Link>
</div>
</div>
</section>

    </>
  )
}
