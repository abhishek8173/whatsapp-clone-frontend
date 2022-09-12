import React from 'react'

function Messages() {
  return (
    <div className='chat__message'>
        <span className='chat__name'>Abhishek</span>
        <div className='chat__messageandtime'>
            <p>This is a message</p>
            <span className='chat__timestamp'>
            {new Date().toUTCString().slice(17,22)}
            </span>
        </div>
    </div>
  )
}

export default Messages