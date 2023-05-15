import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import PostPage from './pages/PostPage/PostPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='/' element={<Layout />}>
            <Route  index element={<HomePage />} />
            <Route  path='post/:id' element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
