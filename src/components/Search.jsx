import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='Find an user'/>
        </div>
        <div className='userChat'>
            <img src='https://images.pexels.com/photos/19579882/pexels-photo-19579882/free-photo-of-elegant-brunette-in-mini-and-mortarboard.jpeg' alt=''></img>
            <div className='userChatInfo'>
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search