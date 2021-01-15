module.exports = {
    name: 'purge',
    description: "this is a purge command!",
    execute(message, args) {
        var boss_man = '724640446982127666'
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have the permissions');
        if (!args[1]) return message.reply('Error please define a second arg');
        message.channel.bulkDelete(args[1])
    }
}