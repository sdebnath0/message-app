import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Lama Chat</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/19579882/pexels-photo-19579882/free-photo-of-elegant-brunette-in-mini-and-mortarboard.jpeg' alt=''/>
            <span>John</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar