import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import SearchForm from './Components/SearchForm/SearchForm';
import Loader from './Components/Loader/Loader';
import UserProfile from './Components/UserProfile/UserProfile';
// import RepositoryList from './Components/RepositoryList/RepositoryList';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <Provider store={store}>
 {/* Add a container div for styling */}
        <SearchForm />
        <Loader />
        <UserProfile />
        {/* <RepositoryList /> */}
      
    </Provider>
  );
};

export default App;
