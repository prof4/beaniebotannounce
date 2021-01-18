const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');

const PREFIX = '-';

module.exports = {
    name: 'helplist',
    description: "this shows a list of help commands!",
    execute(message, args) {
        const embed3 = new Discord.MessageEmbed()
            .setTitle('help page')
            .setAuthor('Arata#6550', 'https://cdn.discordapp.com/avatars/725041335630954587/ccae0a38f2643e9d91061f1fc5f1c755.png?size=128')
            .addField('Fun', PREFIX + 'help fun', true)
            .addField('Moderation', PREFIX + 'help moderation', true)
            .addField('Utility', PREFIX + 'help utility', true)
            .addField('info', PREFIX + 'help info', true)
            .addField('Other', PREFIX + 'help currency', true)
            .addField('Other', PREFIX + 'help other', true)
            .addField('Version', '0.0.1', true)
            .setColor('#5DADE2')
            .setThumbnail('https://cdn.discordapp.com/avatars/727844440604934244/1406a5ba2e7a349cac3900496e3a26e0.png?size=128')
            .setFooter('Subscribe to prof c4 on youtube.')
        message.channel.send(embed3);
    }
}