import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const deletePirate = (id) => {
        axios.delete('http://localhost:8000/delete/' + id)
            .then(res => {
                removeFromDom(id)
            })
    }

    return(
        <div><h1>PIRATE CREW</h1>
            {props.user.map((user, id) => {
                return <div className="table">
                        <table key={id}>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td><p>{user.name}</p></td>
                            <td><button><Link to={`/${user._id}`} >View Pirate</Link></button> 
                            <button onClick={(e)=>{deletePirate(user._id)}}>Walk the Plank</button></td>
                        </tr>
                        </table>
                        </div>
            })}
        </div>
    )
}