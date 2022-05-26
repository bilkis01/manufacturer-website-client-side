import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email } = user;
    const [role, setRole] = useState(false)
    const makeAdmin = (e) => {
        const url = `https://sleepy-escarpment-69683.herokuapp.com/admin/${email}`
     
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
               email,
               role:'admin'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
            toast('make admin success')
    }

    useEffect(() => {
        const url = `https://sleepy-escarpment-69683.herokuapp.com/admin/${user?.email}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {

                const userCredential = data[0]
                if (userCredential?.role) {
                    setRole(true)
                }

            })

    }, [user])
const removeUser=(e)=>{
    console.log(e);

}

    return (

        <tr>
            <th>1</th>
            <td>{email}</td>
           
             <td><button disabled={role} onClick={() => makeAdmin(email)} class="btn btn-xs bg-purple-500 text-white">Make Admin</button></td>
            
            {/* <td><button onClick={()=>removeUser(email)}  class="btn btn-xs bg-red-500 text-white">Remove User</button></td>
            <td>Blue</td> */}
        </tr>

    );
};

export default UserRow;