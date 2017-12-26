import React from 'react'
import ChatMessagesContainer from './chat_messages_container'
import ChatForm from './chat_form'

const ChatBoxContainer = props => (
  <div className="container">
    <ChatMessagesContainer/>
    <ChatForm action="/messages"/>
  </div>
);

export default ChatBoxContainer
