module.exports = {
    name: 'ban',
    description: "this is a ban command to ban people!",
    execute(message, args) {
        var boss_man = '724640446982127666'
        if (message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You do not have the permissions')
        var user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.ban({ reason: 'You were a really misbehaving person!' }).then(() => {
                    message.reply(`WE BANNED THE PERSON! ${user.tag}`)
                })
            } else {
                message.reply("That iser isn\'t in this server");
            }
        } else {
            message.reply('You need to specify a person!');
        }
    }
}

