const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');

const PREFIX = '-';

module.exports = {
    name: 'help',
    description: "this is a work help info command!",
    execute(message, args) {
        if (args[1] === 'utility') {
            embed4 = new Discord.MessageEmbed()
                .setTitle('help utility page')
                .addField(PREFIX + 'purge', 'deletes given number of messages')
                .setColor('#5DADE2')
                .setTitle('help fun page')
                .addField(PREFIX + 'smug', 'postes a random smug img')
                .setColor('#5DADE2')
            message.channel.send(embed5)

        } else if (args[1] === 'moderation') {
            embed6 = new Discord.MessageEmbed()
                .setTitle('help moderation page')
                .addField(PREFIX + 'kick', 'kicks the given member')
                .addField(PREFIX + 'ban', 'bans the given member')
                .setColor('#5DADE2')
            message.channel.send(embed6)

        } else if (args[1] === 'other') {
            embed7 = new Discord.MessageEmbed()
                .setTitle('help other page')
                .addField(PREFIX + 'youtube', 'post the creators youtube channel')
                .addField(PREFIX + 'ping', 'sends pong!')
                .setColor('#5DADE2')
            message.channel.send(embed7)
        } else if (args[1] === 'info') {
            embed8 = new Discord.MessageEmbed()
                .setTitle('help info page')
                .addField(PREFIX + 'profile', 'shows your profile(info)')
                .addField(PREFIX + 'info version', 'sends the version of the bot')
                .setColor('#5DADE2')
            message.channel.send(embed8)
        } else if (args[1] === 'currency') {
            embed8 = new Discord.MessageEmbed()
                .setTitle('help currency page')
                .addField(PREFIX + 'inventory', 'shows your inventory')
                .addField(PREFIX + 'work', 'increase your money')
                .addField(PREFIX + 'balance', 'shows the user current balance')
                .addField(PREFIX + 'pay', 'pay or give a user money')
                .addField(PREFIX + 'buy', 'buy a item from the shop')
                .addField(PREFIX + 'shop', 'shows the shop items')
                .addField(PREFIX + 'lb', 'shows the leaderboard')
                .setColor('#5DADE2')
            message.channel.send(embed8)
        } else {
            message.channel.send('command doesnt exist')
        }
    }
}

