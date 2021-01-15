const roles = ['no existing role']

module.exports = (client) => {
  const channelId = '799645696332005396'

  client.on('message', (message) => {
    const { guild, content, member } = message

    if (member.user.bot) {
      return
    }

    const hasRole = member.roles.cache.find((role) => {
      return roles.includes(role.name)
    })

    if (hasRole) {
      const channel = guild.channels.cache.get(channelId)
      if (channel) {
        channel.send(`<@${member.id}> announces this:
      
"${content}"`)
      }
    }
  })
}
