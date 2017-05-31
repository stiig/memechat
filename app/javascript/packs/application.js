/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'
import ChatBoxTitle from './chat_box_title'

const ChatMessagesContainer = props => (
    <div className="messages">
        <ChatBoxTitle/>
    </div>
)

const ChatFormSubmit = props => (
    <input type="submit" name="commit" value="send" data-disable-with="send"/>
)

const ChatFormTextarea = props => (
    <div>
        <label htmlFor="message_your_message">
            Your message: <textarea name="message[content]" id="message_content" defaultValue=''/>
        </label>
        <ChatFormSubmit/>
    </div>
)

const ChatForm = props => (
    <div>
        <form action={props.action} acceptCharset="UTF-8" data-remote="true" method="post">
            <input name="utf8" type="hidden" value="&#x2713;"/>
            <ChatFormTextarea/>
        </form>
    </div>
)

const ChatBoxContainer = props => (
    <div className="container">
        <ChatMessagesContainer/>
        <ChatForm action="/messages"/>
    </div>
)

const ChatBoxWrapperContainer = props => (
    <div className="wrapper">
        <ChatBoxContainer/>
    </div>
)

const ChatBox = props => (
    <ChatBoxWrapperContainer/>
)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <ChatBox/>,
        document.body.appendChild(document.createElement('div')),
    )
})
