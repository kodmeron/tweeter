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
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile"

//Components
import Navbar from './components/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/data-import" element={<DataImport />} />
          <Route path="/data-export" element={<DataExport />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);


