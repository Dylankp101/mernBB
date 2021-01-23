import React, { useReducer, useState } from 'react';
import axios from 'axios';


export default props => {
    const [name, setName] = useState(""); 
    const [img, setImg] = useState("");
    const [position, setPosition] = useState("");
    const [treasure, setTreasure] = useState("");
    const [phrase, setPhrase] = useState("");
    const [peg, setPeg] = useState("");
    const [eye, setEye] = useState("");
    const [hook, setHook] = useState("");
    const [errors, setErrors] =useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/new', {
            name,
            img,
            position,
            treasure,
            phrase,
            peg,
            eye,
            hook,
        })
            .then(res=> {if(res.data.error.errors){
                setErrors(res.data.error.errors);
            }})
            .catch(err=>console.log(err));
    }
        return(
            <div>
                

                <h1>ENTER PIRATE</h1>
                <form onSubmit={onSubmitHandler}>
                    <div>
                    {errors.name ? <p className="error">{errors.name.message}</p>:''}
                        <span>Name:</span>{' '}
                        <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                    {errors.img ? <p className="error">{errors.img.message}</p>:''}
                        <span>Img:</span>
                        <input type="text" onChange = {(e)=>setImg(e.target.value)}/>
                    </div>
                    <div>
                    {errors.position ? <p className="error">{errors.position.message}</p>:''}
                        <span>Position:</span>
                        <select type="text" onChange = {(e)=>setPosition(e.target.value)}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                    </div>
                    <div>
                    {errors.treasure ? <p className="error">{errors.treasure.message}</p>:''}
                        <span>Treasures:</span>
                        <input type="number" onChange = {(e)=>setTreasure(e.target.value)}/>
                    </div>
                    <div>
                    {errors.phrase ? <p className="error">{errors.phrase.message}</p>:''}
                        <span>Phrase:</span>
                        <input type="text" onChange = {(e)=>setPhrase(e.target.value)}/>
                    </div>
                    <div>
                    {errors.peg ? <p className="error">{errors.peg.message}</p>:''}
                        <span>Peg:</span>
                        <input type="text" onChange = {(e)=>setPeg(e.target.value)}/>
                    </div>
                    <div>
                    {errors.eye ? <p className="error">{errors.eye.message}</p>:''}
                        <span>Eye:</span>
                        <input type="text" onChange = {(e)=>setEye(e.target.value)}/>
                    </div>
                    <div>
                    {errors.hook ? <p className="error">{errors.hook.message}</p>:''}
                        <span>Hook:</span>
                        <input type="text" onChange = {(e)=>setHook(e.target.value)}/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
<br/>
<br/>
<br/>
<br/>
            </div>
        );
    }