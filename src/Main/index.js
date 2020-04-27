import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <ul>
            <li><Link to="/props">Props</Link></li>
            <li><Link to="/propsInput">Props Input</Link></li>
        </ul>
    )
}