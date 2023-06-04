import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../Redux/actions';
import { AiOutlineSearch } from 'react-icons/ai';
import "./searchform.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SearchForm = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    if (username) {
        toast("error")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUserData(username));
    };

    return (
        <div className="searchBar-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <h1>GitHub Explorer</h1>
                <div className="search-input-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Enter GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="search-icon-container">
                        <AiOutlineSearch className="search-icon" />
                    </div>
                </div>
                <button className="search-button" type="submit">Search</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SearchForm;
