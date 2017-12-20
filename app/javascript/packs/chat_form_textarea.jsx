import React from 'react'
import ChatFormSubmit from './chat_form_submit'
import TextField from 'material-ui/TextField';

const ChatFormTextarea = props => (
  <div>
    <label htmlFor="message_your_message">
      Your message: <TextField name="message[content]"
                              id="message_content"
                              value={props.value}
                              onChange={props.onChangeHandler}
                              />
    </label>
    <ChatFormSubmit/>
  </div>
);

export default ChatFormTextarea
