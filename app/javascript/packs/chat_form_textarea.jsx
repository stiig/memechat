import React from 'react'
import ChatFormSubmit from './chat_form_submit'

const ChatFormTextarea = props => (
    <div>
        <label htmlFor="message_your_message">
            Your message: <textarea name="message[content]" id="message_content" defaultValue=''/>
        </label>
        <ChatFormSubmit/>
    </div>
)

export default ChatFormTextarea
