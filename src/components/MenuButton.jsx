import React from 'react'

const MenuButton = ({ navActive, setNavActive }) => {
  return (
    <div className="menu-btn" onClick={() => setNavActive(!navActive)}>
      <span></span>
    </div>
  );
};

export default MenuButton