import React from 'react';
import { NavLink } from 'react-router-dom'


const HomePage = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <NavLink to="/sadas/1">Politecnico</NavLink>
    </div>
  </div>
);

export default HomePage;
