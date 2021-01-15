module.exports = {
    name: 'kick',
    description: "this is a info command!",
    execute(message, args) {
        var boss_man = '724640446982127666'
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You do not have the permissions');

        var user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.kick('you where kicked for misbehavior but you have a chance').then(() => {
                    message.reply(`Succesfully kicked ${user.tag}`);
                }).catch(err => {
                    message.reply('I was unable to kick member');
                    console.log(err);
                })
            } else {
                message.reply("That iser isn\'t in this server");
            }
        } else {
            message.reply('You need to specify a person!');
        }
    }
}