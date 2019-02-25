//
// Fallback Command
//
module.exports = function (controller) {

    controller.hears([".*"], 'direct_message,direct_mention', function (bot, message) {
        var mardown = "Sorry hello, I did not understand.<br/>Try "
            + bot.appendMention(message, "help");

        bot.reply(message, mardown);
    });
}