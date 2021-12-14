import React from 'react'
import ChatWindow from './ChatWindow.css'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default () => {
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU'} alt="" />
          <div className="chatWindow--name">Silas Oliveira</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{color:'#919191'}} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{color:'#919191'}} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{color:'#919191'}} />
          </div>
        </div>
      </div>
      <div className="chatWindow--body">

      </div>
      <div className="chatWindow--footer">

      </div>
    </div>
  )
}
