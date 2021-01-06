import React from 'react';
function Sidebar({className}) {
  return (
  <div className={`Sidebar ${className}`}>
    <ul className="Sidebar__nav">
      <li className="Sidebar__navLinks">News</li>
      <li className="Sidebar__navLinks">Entertainment</li>
    </ul>
  </div>
  );
}
Sidebar.defaultProps = {
  className: ''
}

export default Sidebar;
