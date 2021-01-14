const language = require('@util/language')
const channelId = '734698971175321640'
module.exports = {
  commands: ['announce', 'a'],
  expectedArgs: '<anoounce>',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 1,
  maxArgs: 1,
  cooldown: 10,
  description: 'announces',
  callback: (message, arguments, text) => {
    channelId.send(message)
  },
  permissions: 'ADMINISTRATOR',
  requiredRoles: [],
}
