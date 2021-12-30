import React, {useEffect,  useState} from 'react'
import './App.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat'
import Login from './Login'


export default () => {

  const [showNewChat, setShowNewChat] = React.useState(false)
  const [user, setUser] = useState(null)
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: 'Silas Oliveiras',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU'
    },
    {
      chatId: 2,
      title: 'Sils Oliveira',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU'
    },
    {
      chatId: 3,
      title: 'Silas eOliveira',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU'
    }
  ])
  const [activeChat, setActiveChat] = useState({})

  const handleLogindata = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    }
    setUser(newUser)
  }
  
  if (user === null) {
    return (<Login onReceive={ handleLogindata }/>)
  }

  return (
    <div className='app-window'>
      <div className="sidebar">
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user?.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color:'#919191' }} />       
            </div>
            <div onClick={() => setShowNewChat(true) } className="header--btn">
              <ChatIcon style={{ color:'#919191' }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color:'#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>

        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatListItem
              key={String(key)}
              data={item}
              active={activeChat.chatId === item.chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && (
          <ChatWindow
            user={user}
          />
        )}
        {activeChat.chatId === undefined && (
          <ChatIntro />
        )}
            
      </div>
    </div>
  )
}