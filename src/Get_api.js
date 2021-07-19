import React,{useEffect, useState} from 'react'
import { Table } from 'react-bootstrap';

function Get_api(){
    const [user,setUser]= useState([])
    useEffect(()=>{
        // fetch("https://2y6v79gz98.execute-api.us-east-1.amazonaws.com/Prod/patient").then((data)=>{
            //"https://reqres.in/api/unknown"
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            console.warn("data",data);
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result.data)
            })
        })
    },[])

    return(
        <div>
            <h1>Get_api page</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    
                </tr>
                 {
                    user&&user.map((item, index)=> (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.employee_name}</td>
                        <td>{item.employee_salary}</td> 
                        <td>{item.employee_age}</td>
                    </tr>
                    ))
                } 
            </thead>
            <tbody>
                
            </tbody>
        </Table>
        </div>
    )
    
}

export default Get_api;