import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/Login';
import HomePage from './Pages/Home/Home';
import ManageGroupsPage from './Pages/ManageGroups/ManageGroups';
import MakeGroupsPage from './Pages/MakeGroup/MakeGroups';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path = "/" element = {<LoginPage/>}/>
          <Route exact path = "/home" element = {<HomePage/>}/>
          <Route exact path = "/manage-groups" element = {<ManageGroupsPage/>}/>
          <Route exact path = "/make-groups" element = {<MakeGroupsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
