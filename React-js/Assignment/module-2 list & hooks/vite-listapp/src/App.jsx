import React, { useState } from 'react'
import List from './List';
import UpdateList from './UpdateList';
function App() {
  const listdata = 
  [
    {id:1, name:"pooja"},
    {id:2, name:"rakhi"},
    {id:3, name:"dev"},

  ]
  return (
    <div>
      <h1>List View</h1>
      {listdata.map(({id,name})=>(
        <List key={id} firstname={name}/>
      ))
      }

      <div>
        <UpdateList/>
      </div>
    </div>
  )
}

export default App
