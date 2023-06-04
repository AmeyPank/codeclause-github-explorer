import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../Redux/actions';

import "./searchform.css"
const SearchForm = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUserData(username));
    };

    return (
        <div className='searchBar-container'>
        <form onSubmit={handleSubmit}>
            <h1>GitHub Explorer</h1>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        </div>
    );
};

export default SearchForm;
