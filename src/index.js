import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import { AuthContextProvider } from './auth/AuthContextProvider';

import Signup from './auth/Signup';
import Signin from './auth/Signin';

import DataImport from './firestore/DataImport';
import DataExport from './firestore/DataExport';

//Pages
import Profile from "./pages/Profile/Profile"

//Components
import Navbar from './components/Navbar';
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import DisplayCategories from './components/DisplayCategories';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/data-import" element={<DataImport />} />
          <Route path="/data-export" element={<DataExport />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userid" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
          {/* <Route path="/category" element={<Category />} /> */}
          <Route path="/category/:category" element={<DisplayCategories />} />
          <Route path="/post/:postId" element={<Post />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);


