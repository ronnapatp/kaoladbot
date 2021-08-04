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
                //{ name: '!warn <tag> <reson>', value: '`Warn member with reson`', inline: true },
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
            .setDescription('Use rymth or hydra')
            .setFooter('Kaolad help area');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
}