import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UserDetails from './UserDetails';
import PageNOtFound from './PageNOtFound';
// import EmployeeList from './EmployeeList';
import './App.css';

function App() {
  
  // store multiple user information
  
  const users=["dheyey","rutu","krunal","dhaval","manish","pooja","dinesh"];
  
  return (
    <div>
      <Container className='p-5 mx-auto shadow mt-5'>
        <h1 className='ms-5'>User dynamic load using React router-dom</h1>

        <div className='p-4 flex gap-5 m-5'>
          {
            users.map((user) => {
              return(
                <Link to={`users/${user}`} className='m-1 p-4'>{user}</Link>
              )
            })
          }
          
        </div>

        {/* get dynamic users information to navigate */}
        <Routes>
          <Route path='users/:userId' element={<UserDetails/>}/>
          <Route path='*' element={<PageNOtFound />} />
        </Routes>
      </Container>
    </div>

  );
}

export default App;
