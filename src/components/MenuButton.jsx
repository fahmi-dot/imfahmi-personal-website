import React from 'react'
import { useState } from 'react'

const MenuButton = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className={navActive ? 'nav-active' : ''}>
      <div className='menu-btn' onClick={() => setNavActive(!navActive)}>
        <span></span>
      </div>
    </div>
  )
}

export default MenuButton