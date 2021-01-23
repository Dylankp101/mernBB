import React from 'react';
import {Link} from '@reach/router';
export default props => {

    return (
        <div>
            <a href="/">PIRATE CREW</a>
            <h1>{props.pirateView.phrase}</h1>
            <h3>About:</h3>
            <p>Name: {props.pirateView.name}</p>
            <p>Image Url: {props.pirateView.img}</p>
            <p>Position: {props.pirateView.position}</p>
            <p>Treasure: {props.pirateView.treasure}</p>
            <p>Peg: {props.pirateView.peg}</p>
            <p>Eye: {props.pirateView.eye}</p>
            <p>Hook: {props.pirateView.hook}</p>


        </div>
    )
}