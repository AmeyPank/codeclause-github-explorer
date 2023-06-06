import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import SearchForm from './Components/SearchForm/SearchForm';
import Loader from './Components/Loader/Loader';
import UserProfile from './Components/UserProfile/UserProfile';
// import RepositoryList from './Components/RepositoryList/RepositoryList';
import './App.css'; // Import your CSS file
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <SearchForm />
      <Loader />
      <UserProfile />
      <Footer />
    </Provider>
  );
};

export default App;
