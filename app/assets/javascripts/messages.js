App.messages = App.cable.subscriptions.create('MessagesChannel', {
    received: function (data) {
        var messages = document.querySelector('.messages');
        messages.append(this.renderMessage(data));
        $(messages).scrollTop(messages.scrollHeight);
    },

    renderMessage: function (data) {
      const p = document.createElement('p');
      p.innerHTML = data.message;
      return p;
    }
});
