import React from 'react'
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import bgMsg from '../assets/images/bgMsg.jpg'
import MessageItem from './MessageItem'

import api from '../api'

export default ({ user, data, handleGoBack }) => {
  
  const body = React.useRef()
  const input = React.useRef()

  let recognition = null;
  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (speechRecognition) {
    recognition = new speechRecognition()
  }

  const [emojiOpen, setEmojiOpen]  = React.useState(false)
  const [listening, setListening]  = React.useState(false)
  const [text, setText]  = React.useState('')
  const [list, setList]  = React.useState([])
  const [users, setUsers]  = React.useState([])

  React.useEffect(() => {
    setList([])
    let unsub = api.onChatContent(data.chatId, setList, setUsers)

    return unsub
  },[data.chatId])

  React.useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
    }
  }, [list])
  
  React.useEffect(() => {
    input.current.focus()
  },[])

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji)
  }
  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }

  const handleSendClick = () => {
    if (text) {
      api.sendMessage(data, user.id, 'text', text, users);
      setText('');
      setEmojiOpen(false)
    }
  }
  const handleInputKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSendClick()
    }
  }
  
  const handleMicClick = () => {
    if (recognition !== null) {
      
      recognition.onstart = () => {
        setListening(true)
      }

      recognition.onend = () => {
        setListening(false)
      }
      
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript)
      }

      recognition.start()

    }
  }

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src={data.image} alt={data.title} />
          <div className="chatWindow--name">{data?.title}</div>
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
      <div
        ref={body}
        className="chatWindow--body"
      >
        <button
          onClick={() => handleGoBack()}
          style={{ backgroundColor: 'transparent', border: 0, marginBottom: 15 }}
          className="chatWindow--btnBack"
        >
          <ArrowBackIcon />
        </button>
        {list.map((item, k) => (
          <MessageItem
            key={k.toString()}
            data={item}
            user={user}
          />
        ))}
      </div>

      <div
        className="chatWindow--emojiarea"
        style={{height: emojiOpen ? '200px':'0px'}}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div style={{backgroundImage: `url (${bgMsg})`}} className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            onClick={handleCloseEmoji}
            className="chatWindow--btn"
            style={{width: emojiOpen ? 40 : 0}}
          >
            
            <CloseIcon style={{color:'#919191'}} />
          </div>
          <div
             onClick={ handleOpenEmoji }
            className="chatWindow--btn"
          >
            <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}} />
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={handleInputKeyUp}
            ref={input}
          />
            </div>
        <div className="chatWindow--pos">

          {text === '' ? (
            <div
              onClick={handleMicClick}
              className="chatWindow--btn"
            >
              <MicIcon style={{ color: listening ? '#126ece' : '#919191' }} />
          </div>
          ): (
              <div
                onClick={handleSendClick}
                className="chatWindow--btn">
            <SendIcon style={{color:'#919191'}} />
          </div>
          )}


            </div>
      </div>
    </div>
  )
}
