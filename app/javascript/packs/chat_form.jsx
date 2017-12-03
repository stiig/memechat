import React from 'react'
import ChatFormTextarea from './chat_form_textarea'

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""}
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);


    const reqOptions = {
      method: "POST",
      body: form,
      credentials: 'include',
      headers: new Headers({'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content})
    };

    fetch(e.target.action, reqOptions)
      .then(response => {
        if (response.ok) {
          this.setState({value: ""})
        }
      });
  };

  textAreaHandler = e => {
    this.setState({value: e.target.value})
  };

  render() {
    return <form action={this.props.action}
                 onSubmit={this.onSubmitHandler}>
      <input name="utf8"
             type="hidden"
             value="&#x2713;"/>
      <ChatFormTextarea onChangeHandler={this.textAreaHandler} value={this.state.value}/>
    </form>
  }
}

export default ChatForm
