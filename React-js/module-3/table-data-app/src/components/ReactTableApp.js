import React from 'react';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";

export default function ReactTableApp() 
{

    // create react-table data

    const data=[
      {
        id:1,
        name:'Ajay',
        age:20,
        salary:10000,
      },
      {
        id:2,
        name:'Vishesh',
        age:22,
        salary:12000
      },
      {
        id:3,
        name:'Bhavesh',
        age:24,
        salary:14000
      },
      {
        id:4,
        name:'Kalpesh',
        age:26,
        salary:16000
      },
      {
        id:5,
        name:'Vignesh',
        age:23,
        salary:156952
      },
      {
        id:6,
        name:'Bhavik',
        age:29,
        salary:28965
      },
      {
        id:7,
        name:'Kalpna',
        age:20,
        salary:15690
      },
      {
        id:8,
        name:'Rachana',
        age:21,
        salary:14500
      },
      {
        id:9,
        name:'Vishva',
        age:28,
        salary:20050
      },
      {
        id:10,
        name:'Suhana',
        age:30,
        salary:20000
      },
    ]

    // add a column of tables

    const columns=[
      {
        Header:'Id',
        accessor:'id'
      },
      {
        Header:'Name',
        accessor:'name'
      },
      {
        Header:'Age',
        accessor:'age'
      },
      {
        Header:'Salary',
        accessor:'salary'
      },
    ]

    return (
      <div>
        <div className='table-app'>
          <h1 align='center'>Employee Informations</h1>
          <hr/>
          {/* call a react table data */}
        <ReactTable data={data} columns={columns} defaultPageSize={2} pageSizeOptions={[2,4,5,6,8,10]}></ReactTable>
        </div>
      </div>
    )
}
