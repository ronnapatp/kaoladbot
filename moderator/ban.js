const command = require('./command') 
const { MessageEmbed } = require('discord.js');
module.exports = (client) => {
    command(client, 'ban', (message) => {
        const { member, mentions } = message
        const report = client.channels.cache.get('937602764341661727')
    
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('BAN_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('BAN REPORT')
            
            .addFields(
                { name: 'Ban by', value: `${message.author.username}`, inline: true},
                { name: 'Ban', value: `${target.username}`, inline: true},
                { name: 'Moderator', value: `<@!867031115373215795>`, inline: true },
            )
            .setFooter('KAOLADBOT');
            targetMember.send(`⚠️ ${tag}You have been ban by ${message.author.username} ⚠️`);
            targetMember.ban()
            report.send(exampleEmbed);

            client.channels.cache.get('937602764341661727').send(`${message.author.username} ban ${target.username}`)
            message.channel.send(`${tag} That user has ban, BYE!`)
          } else {
            message.channel.send(`Please tag someone to ban.`)
          }
        } else {
          message.channel.send(
            `${tag} You do not have permission to use this command.`
          )
        }
      })
}
