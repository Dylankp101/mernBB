import React, { useEffect, useState} from 'react';
import List from '../components/List';
import Form from '../components/Form';
import axios from 'axios';
import { Link } from '@reach/router';

export default () => {

    return (
        <div>
            <Link to={'/'}>PIRATE CREW</Link>
            <Form/>
        </div>
    )

}