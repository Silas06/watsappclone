import React from 'react'
import './NewChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({show, setShow, chatList, user}) => {

  const [list, setList] = React.useState([
    {
      id: 123,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU',
      name: 'Silas teste'
    },
    {
      id: 1232,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU',
      name: 'Silas teste'
    },
    {
      id: 1223,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU',
      name: 'Silas teste'
    },
    {
      id: 2123,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU',
      name: 'Silas teste'
    },
    {
      id: 1233,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU',
      name: 'Silas teste'
    },
  ])

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className="newChat" style={{left: show ? 0 : -415}}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backbutton">
          <ArrowBackIcon style={{color:'#fff'}} />
        </div>
        <div className="newChat--headtitle">Nova Conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, k) => (
          <div className="newChat--item" key={item.id}>
            <img className="newChat--itemavatar" src={item.avatar} alt="avatar" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}