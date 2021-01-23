import React, { useEffect, useState} from 'react';
import List from '../components/List';
import Form from '../components/Form';
import axios from 'axios';
import { Link } from '@reach/router';

export default () => {
    const [user, setUser] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
        .then(res=>{
            setUser(res.data);
            setLoaded(true);
        })
    },[]);

    const removeFromDom = userId => {
        setUser(user.filter(user => user._id != userId));
    }

    return (
        <div>
            
            <Link to={'/new'}>ADD PIRATE</Link>
            {loaded && <List user={ user } removeFromDom={removeFromDom}/>}
        </div>
    )

}