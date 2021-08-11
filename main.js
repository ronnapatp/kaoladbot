const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const command = require('./command/index');
const help = require('./command/help');
const kick = require('./moderator/kick');
const ban = require('./moderator/ban');
const clear = require('./moderator/delete');
const rules = require('./command/rules');
const rulesth = require('./command/rulesth');
const announcement = require('./command/announc');
const poll = require('./command/poll');
const reaction = require('./command/reaction');
const info = require('./command/info');
const role = require('./command/role')
const welcome = require('./moderator/welcome')
const political = require('./command/political')
const donate = require('./command/donate')
const badw = require('./moderator/badword')
//const joke = require('./command/joke')
const pword = require('./moderator/politicalword')

client.on('ready', () => {
	console.log(`Logged in as smile bot!`);
    client.user.setActivity("!help", { type: "PLAYING"});
    //client.channels.cache.get('867654057912958976').send('📢<@867031115373215795> is now online to see command use **!help**✨');

    command(client)
    help(client)
    kick(client)
    ban(client)
    clear(client)
    rules(client)
    rulesth(client)
    announcement(client)
    poll(client)
    reaction(client)
    info(client)
    role(client)
    welcome(client)  
    political(client)  
    donate(client)
    badw(client)
    //joke(client)
    pword(client)
});

client.login(config.token);