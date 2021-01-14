const language = require('@util/language')
const channelId = '734698971175321640'
module.exports = {
  commands: ['announce', 'a'],
  permissionError: 'You need admin permissions to run this command',
  cooldown: 10,
  description: 'announces',
  callback: (message, arguments, text) => {
    channelId.send(message)
  },
  permissions: 'ADMINISTRATOR',
  requiredRoles: [],
}
