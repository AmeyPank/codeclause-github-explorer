import React from 'react';
import { useSelector } from 'react-redux';
import "./userProfile.css"
import RepositoryList from '../RepositoryList/RepositoryList';
const UserProfile = () => {
    const user = useSelector((state) => state.user);

    if (!user.name) {
        return null; // Don't render the UserProfile component if user information is not available
    }

    return (
        <div className='details-container'>
            <div className="detail-card">
                <div className="card-body">
                    <h2>{user.name}</h2>
                    <img src={user.avatar_url} alt="Profile" />
                    <p>Repositories: {user.public_repos}</p>
                    <p>Followers: {user.followers}</p>
                    <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
                        Go to GitHub Profile
                    </a>

                </div>
                <div> <RepositoryList /></div>

            </div>

        </div>
    );
};

export default UserProfile;
