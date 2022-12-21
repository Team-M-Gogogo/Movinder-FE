import React from 'react'
import ForumMessage from './ForumMessage';

export default function FormMessageGroup(props) {
  return props.roomMessage.map((message) => {
    return <ForumMessage message={message} key={message.messageId}/>;
  })
}
