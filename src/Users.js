import React from 'react'
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { useState } from 'react'

function Users() {
    const [user, setUser] = useState([
        { name: 'sonalika', age: '23', address: 'delhi' },
        { name: 'shri', age: '23', address: 'delhi' },
        { name: 'sona', age: '23', address: 'delhi' },
        { name: 'shrivastava', age: '100', address: 'delhi' },
        { name: 'tanu', age: '15', address: 'delhi' }
    ])
    return (<div>
        <h1>hello</h1>

        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
        <hr></hr>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>addres</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item,index)=><tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                </tr>)
                }
            </tbody>
        </Table>
    </div>

    )

}
export default Users