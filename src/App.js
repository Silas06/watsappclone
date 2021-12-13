import React, {useEffect,  useState} from 'react'
import './App.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem'


export default () => {

  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}])

  return (
    <div className='app-window'>
      <div className="sidebar">
        <header>
          <img className="header--avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU" alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color:'#919191' }} />       
            </div>
            <div className="header--btn">
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
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
...
      </div>
    </div>
  )
}