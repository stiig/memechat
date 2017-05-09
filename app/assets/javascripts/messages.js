App.messages = App.cable.subscriptions.create('MessagesChannel', {
    received: function (data) {
        var messages = $('.messages');
        messages.append(this.renderMessage(data));
        messages.scrollTop(messages[0].scrollHeight);
    },

    renderMessage: function (data) {
        return "<p>" + data.message + "</p>";
    }
});
