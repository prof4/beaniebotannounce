const language = require('@util/language')
const channelId = '798041957825118238'
module.exports = {
  commands: ['announce', 'a'],
  permissionError: 'You need admin permissions to run this command',
  cooldown: 10,
  description: 'announces',
  callback: (message, arguments, text) => {
    channelId.send(arguments)
  },
  permissions: 'ADMINISTRATOR',
  requiredRoles: [],
}
