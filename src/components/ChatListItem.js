import React from 'react'
import './ChatListItem.css'

export default () => {
  return (
    <div className="chatListItem">
      <img className="chatListItem--avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU" alt="" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">
            Silas Paixão
          </div>
          <div className="chatListItem--date">
            22:23
          </div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>Oi , boa noite </p>
          </div>
        </div>
      </div>
    </div>
  )
}