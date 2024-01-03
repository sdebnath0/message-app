import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src='https://images.pexels.com/photos/19579882/pexels-photo-19579882/free-photo-of-elegant-brunette-in-mini-and-mortarboard.jpeg' alt=''/>
        <span>Just Now</span>   
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src='https://images.pexels.com/photos/19579882/pexels-photo-19579882/free-photo-of-elegant-brunette-in-mini-and-mortarboard.jpeg' alt=''/>
      </div>
    </div>
  )
}

export default Message