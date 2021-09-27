const { MessageEmbed } = require('discord.js');


module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!help'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Kaolad help area')

            .addFields(
                { name: 'Moderator', value: '`!help-moderator`', inline: true},
                { name: 'Commands', value: '`!help-command`', inline: true },
                { name: 'Music', value: '`!help-music`', inline: true },
            )
            .setFooter('Smile help area');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!help-moderator'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Kaolad moderator help area')
            
            .addFields(
                { name: '!kick <tag>', value: 'To kick member', inline: true},
                { name: '!ban <tag>', value: '`To ban member`', inline: true },
                { name: '!clear <amount>', value: 'Delete message', inline: true },
                { name: '!mute <tag>', value: '`To mute member`', inline: true },
                { name: '!unmute <tag>', value: '`To unmute member`', inline: true },
                { name: '!warn <tag>', value: '`To warn member`', inline: true },
            )
            .setFooter('Kaolad help area');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!help-command'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Kaolad commands help area')
        
            .addFields(
                { name: '!github', value: 'Show bot github repo', inline: true},
                { name: '!rules', value: 'Rules in English', inline: true },
                { name: '!rulesth', value: 'Rules in Thai', inline: true },
                { name: '!announcement', value: 'Show announc room', inline: true },
                { name: '!inviteme', value: 'Show invite link', inline: true },
                { name: '!severinfo', value: 'Show sver info', inline: true },
                { name: '!poll', value: 'Create poll', inline: true },
                { name: '!help', value: 'Show this command', inline: true },
                { name: '!<emoji name>', value: 'Bot will react emoji to message', inline: true },
                { name: '!leaderof<country name>', value: 'Use `!countryleader` for more info', inline: true },

            )
            .setFooter('Kaolad help area');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!help-music'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Kaolad music help area')
            .setDescription('Use <@872691687263207424>')
            .setFooter('Kaolad help area');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!countryleader'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Kaolad country leader commands help area')
        
            .addFields(
                { name: '!leaderofthailand', value: 'Thailand', inline: true},
                { name: '!leaderofuk', value: 'United kingdom', inline: true },
                { name: '!leaderofus', value: 'United States', inline: true },
            )
            .setFooter('Kaolad help area');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
}