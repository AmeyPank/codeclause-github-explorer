import React from 'react';
import { useSelector } from 'react-redux';
import "./repoList.css"
const RepositoryList = () => {
    const repositories = useSelector((state) => state.repositories);

    if (repositories.length === 0) {
        return null; // Don't render the RepositoryList component if repositories data is not available
    }

    return (
        <div className='repoList'>
            <h3>Repositories:</h3>
            <ol className="repository-list">
                {repositories.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default RepositoryList;
