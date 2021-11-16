import { Table } from 'reactstrap';
import React, { useState, useEffect } from 'react'
export default function Axiosget() {
    const [list,setList]=useState([]);
   async function getList(){
          await  Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
                console.log("Data is",response);
                setList(response.data)
             })
         }
         console.log("stateData", list);
         useEffect(()=>{getList()},[]);
         return (
         <div>
              <Table bordered>
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>Name</th>
                         <th>User Name</th>
                         <th>Email</th>
                     </tr>
                 </thead>
             </Table>
                 
                 {list.map((item)=>{
                     return( 
                     <div>
     
                     <Table bordered>
                         <thead>
                             <tr>
                                 <td>{item.id}</td>
                                 <td>{item.name}</td>
                                 <td>{item.username}</td>
                                 <td>{item.email}</td>
                             </tr>
                         </thead>
                     </Table>
                           
                     </div>)
             })}
         </div>
         )
    
}
