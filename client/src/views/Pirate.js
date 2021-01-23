import React, { useEffect, useState} from 'react';
import axios from 'axios';
import PirateView from '../components/PirateView'

export default (props) => {
    const [pirateView, setPirateView] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/users/${props.id}`)
        .then(res=> {
            setPirateView(res.data);
            setLoaded(true);
            console.log(res.data)
        })
        
        .catch(err=>console.log("Error: ", err))
    },[]);

    const removeFromDom = pirateId => {
        setPirateView(pirateView.filter(pirate => pirate._id != pirateId));
    }

    return (
        
        <div>
            {loaded && <PirateView pirateView={ pirateView } removeFromDom={removeFromDom}/>}
        </div>
    )

}