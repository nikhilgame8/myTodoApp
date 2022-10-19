import React, {useContext, useState, useEffect} from 'react';
import {data} from './App';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Lists=(prop)=>{
  const records=useContext(data);

return(
  <div className="mx-auto w-80 p-3">
   <Table responsive>
   <thead>
     <tr>
       <th>S No.</th>
       <th>Date</th>
       <th>Account</th>
       <th>To</th>
       <th>Amount</th>
       <th>Edit / Delete</th>
     </tr>
   </thead>
   <tbody>
     {
        records.map((list, i)=>
        <tr key={i}>
       <td>{i+1}</td>
         <td>{list.onDate}</td>
            <td>{list.from}</td>
            <td>{list.paidTo}</td>
            <td>{list.amount}</td>
            <td><Button size="sm" variant="outline-dark" onClick={()=>prop.editFun(list.id)}>Edit</Button>
            <Button size="sm" variant="outline-dark" onClick={()=>prop.deleteFun(i)}>Delete</Button></td>
     </tr>)
     }
   </tbody>
   </Table>
 </div>
)
}
export default Lists;