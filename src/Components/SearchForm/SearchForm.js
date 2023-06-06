import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../Redux/actions';
import { AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from "./explore-github.png"
import "./searchform.css"

const SearchForm = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username) {
            toast.error('Username cannot be empty.');
            return;
        }else{
            toast.success('Username is available.');

        }

        dispatch(fetchUserData(username));
    };

    return (
        <div className="searchBar-container">
            <div className='image-container'>
                <img src={background} alt='imag' />
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <h1>GitHub Explorer</h1>
                <div className="search-input-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Enter Github username..."
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
