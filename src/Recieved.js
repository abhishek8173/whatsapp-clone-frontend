import React from 'react'

function Recieved() {
  return (
    <div className='chat__message chat__recieve'>
        <span className='chat__name'>You</span>
        <div className='chat__messageandtime'>
            <p>This is a message</p>
            <span className='chat__timestamp'>
            {new Date().toUTCString().slice(17, 22)}
            </span>
        </div>
    </div>
  )
}

export default Recieved