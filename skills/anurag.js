//
// Simplest use of Botkit's conversation system
//
module.exports = function (controller) {

    controller.hears([/^hi$/], ['message_received'], function (bot, message) {

        // do something to respond to message
        bot.reply(message, 'Oh hai!');

    });
};
