import React from 'react'
import './MessageItem.css'

export default ({ data, user }) => {
  const [time, setTime] = React.useState('')

  React.useEffect(() => {
    const init = () => {
      if (data.date > 0) {
        let d = new Date(data.date.seconds * 1000);
        let hours = d.getHours();
        let minutes = d.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes

        setTime(`${hours}:${minutes}`)
      }
    }
    init()
  },[data])
  return (
    <div
      className="messageLine"
      style={{justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'}}
    >
      <div
        className="messageItem"
        style={{backgroundColor: user.id === data.author ? '#dcf8c6' : '#fff'}}
      >
        <div className="messageText">
          {data.body}
        </div>
        <div className="messageDate">{ time }</div>
      </div>
    </div>
  )
}