//
// Simplest use of Botkit's conversation system
//
module.exports = function (controller) {

    controller.hears([/^hi$/], 'direct_message,direct_mention', function (bot, message) {

        // do something to respond to message
        bot.reply(message, 'Oh hai!');

    });
};
