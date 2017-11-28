import React from 'react'

const ChatFormSubmit = props => (
    <input type="submit" name="commit" onSubmit={props.onSubmitHandler} value="send" data-disable-with="send"/>
)

export default ChatFormSubmit
