import React from 'react'
import ChatFormTextarea from './chat_form_textarea'

const ChatForm = props => (
    <div>
        <form action={props.action} acceptCharset="UTF-8" data-remote="true" method="post">
            <input name="utf8" type="hidden" value="&#x2713;"/>
            <ChatFormTextarea/>
        </form>
    </div>
)

export default ChatForm
