const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const bot = new Client();
config = require('./config.json');
const PREFIX = config.prefix;

let guild = 795746552647385149

const fs = require('fs');
bot.msgs = require("./rules.json")
const { NONAME } = require('dns');
const { info, warn } = require('console');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command)
}
var version = '0.0.1'
bot.on('ready', () => {
    console.log('The client is ready!')
    console.log('Soul bot is online')
    bot.user.setActivity('krunker.io gameplay', { type: "STREAMING", url: "https://www.youtube.com/watch?v=qTXpI-7ghp8" }).catch(console.error)
});

bot.on('message', async message => {
    if (message.author.bot) return;

    if (!message.content.startsWith(PREFIX)) return;
    const input = message.content.slice(PREFIX.length).trim();
    if (!input.length) return;
    const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);
    let args = message.content.slice(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'youtube':
            bot.commands.get('youtube').execute(message, args);
            break;
        case 'purge':
            bot.commands.get('purge').execute(message, args);
            break;
        case 'helplist':
            if (args[1]) return;
            bot.commands.get('helplist').execute(message, args);

            break;
        case 'help':
            if (!args[1]) return message.channel.send('you must type helplist for all the help options');
            bot.commands.get('help').execute(message, args);
            break;
        case 'smug':
            bot.commands.get('smug').execute(message, args);
            break;
        case 'kick':
            bot.commands.get('kick').execute(message, args);
            break;
        case 'ban':
            bot.commands.get('ban').execute(message, args);
            break;
        case 'ping':
            //if (!message.member.roles.cache.has(boss_man)) return message.channel.send('You do not have the permissions');
            message.channel.send('pong!')
            break;
        case 'announce':
            let args = message.content.slice(PREFIX.length).split("'");
            if (message.member.hasPermission('ADMINISTRATOR'))
            if (!args[1]) return message.channel.send('You need to give a message');
            let channel = bot.channels.cache.get('798041957825118238')
            if (!channel) return message.channel.send('invalid channel');
            msg = args[1];
            channel.send(msg);
            break;
        
        case 'wrule':
            editmessage = message.content.slice (6);
            bot.msgs [guild] = {
                message: editmessage
            }
            fs.writeFile ("./rules.json", JSON.stringify (bot.msgs, null, 4), err => {
                if (err) throw err;
                message.channel.send ("rules updated");
            });
            break;
        case 'drule':
            let chan = bot.channels.cache.get('795746733934116874')
            if (!chan) return message.channel.send('invalid channel');
            let _message = bot.msgs[guild].message;
            chan.send(_message);
            break;
    


    }
});

bot.login(process.env.token) 