import React from 'react'
import './NewChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import api from '../api';

export default ({show, setShow, chatList, user, setActiveChat}) => {

  const [list, setList] = React.useState([])

  React.useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        const res = await api.getContactList(user.id)  
        setList(res)
      }
    }
    getList()
  },[])

  const handleClose = () => {
    setShow(false)
  }
  const addNewChat = async (user2) => {
    await api.addNewChat(user, user2, setActiveChat)

    handleClose()
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
          <div
            onClick={() => addNewChat(item)}
            className="newChat--item"
            key={item.id}>
            <img className="newChat--itemavatar" src={item.avatar} alt="avatar" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}