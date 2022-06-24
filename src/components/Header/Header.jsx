import React from 'react'

const Header = () => {
  return (
    <div className='navbars'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
        <li className='pull-right'><a href="Ahmed's Resume.pdf" download="Resume" target="_blank">Download cv</a></li>
      </ul>
    </div>
  )
}

export default Header