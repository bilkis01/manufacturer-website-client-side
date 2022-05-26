import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const User = () => {

    const { data: users, isLoading } = useQuery('users', () => fetch('https://sleepy-escarpment-69683.herokuapp.com/user').then(res => res.json()))
    if (isLoading) {
        return <button className="btn btn-square  loading"></button>
    }




    return (
        <div>
            <h1>{users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;