import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';



const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Politecnico</IndexLink>
      </div>

    </div>

    {/* child component will be rendered here */ }
    {children}

  </div>

);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
