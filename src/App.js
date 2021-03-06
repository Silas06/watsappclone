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
import api from './api'


export default () => {

  const [showNewChat, setShowNewChat] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const [showContentArea, setShowContentArea] = React.useState(false)
  const [user, setUser] = useState(null)
  const [chatList, setChatList] = useState([])
  const [activeChat, setActiveChat] = useState({})

  React.useEffect(() => {
    const handleMobile = () => {
        if (window.innerWidth < 600) {
          setIsMobile(true)
       }
    }
    handleMobile()
  },[])
  React.useEffect(() => {
    if (user !== null) {
      let onsub = api.onChatList(user.id, setChatList)

      return onsub
    }
  },[user])

  const handleLogindata = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    }
    await api.addUser(newUser)
    setUser(newUser)
  }

  const handleGoBack = () => {
    setShowContentArea(false)
    setActiveChat({})
  }
  
  if (user === null) {
    return (<Login onReceive={ handleLogindata }/>)
  }

  return (
    <div className='app-window'>
      {isMobile ? (
        <>
        <div className="sidebar" style={{display: showContentArea ? 'none' : ''}}>
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
          setActiveChat={setActiveChat}
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
            <input type="search" placeholder='Procurar ou come??ar uma nova conversa' />
          </div>
        </div>

        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatListItem
              key={String(key)}
              data={item}
              active={activeChat.chatId === item.chatId}
              onClick={() => {
                setActiveChat(chatList[key])
               isMobile ? setShowContentArea(true) : ''
              }}
            />
          ))}
        </div>

      </div>
      <div className="contentarea" style={{display: showContentArea ? '' : 'none'}}>
        {activeChat.chatId !== undefined && (
          <ChatWindow
            user={user}
            data={activeChat}
            handleGoBack={handleGoBack}
          />
        )}
        {activeChat.chatId === undefined && (
          <ChatIntro />
        )}            
          </div>
          </>
      )
        : (
          <>
      <div className="sidebar">
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
          setActiveChat={setActiveChat}
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
            <input type="search" placeholder='Procurar ou come??ar uma nova conversa' />
          </div>
        </div>

        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatListItem
              key={String(key)}
              data={item}
              active={activeChat.chatId === item.chatId}
              onClick={() => {
                setActiveChat(chatList[key])
               isMobile ? setShowContentArea(true) : ''
              }}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && (
          <ChatWindow
            user={user}
            data={activeChat}
            handleGoBack={handleGoBack}
          />
        )}
        {activeChat.chatId === undefined && (
          <ChatIntro />
        )}
            
            </div>
        </>
        )}
    </div>
  )
}