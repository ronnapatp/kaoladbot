const command = require('./command') 
<<<<<<< HEAD
const { MessageEmbed } = require('discord.js');



=======
>>>>>>> 0d15f81e1583c161b9d464faa9fb14daa028f448

module.exports = (client) => {
    command(client, 'freenitro', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
<<<<<<< HEAD
        const report = client.channels.cache.get('853526088473640971')
  
=======
    
>>>>>>> 0d15f81e1583c161b9d464faa9fb14daa028f448
        if (
          member.hasPermission('SEND_MESSAGES')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
<<<<<<< HEAD
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('GIFT NITRO')
            
            .addFields(
                { name: 'Gift from', value: `${message.author.username}`, inline: true},
                { name: 'Gift to', value: `${target.username}`, inline: true },
            )
            .setFooter('KAOLADBOT');
            targetMember.send(`Seem like ${tag} want to give you free nitro! CONTACT HIM`);
            message.channel.send(`${tag} I send the ways to get free nitro in dm.`);
            report.send(exampleEmbed);
            
=======
            targetMember.send(`Seem like ${tag} want to give you free nitro! CONTACT HIM`);
            message.channel.send(`${tag} I send the ways to get free nitro in dm.`)
>>>>>>> 0d15f81e1583c161b9d464faa9fb14daa028f448
          } else {
            message.channel.send(`Please tag someone to gift nitro.`)
          }
        } else {
          message.channel.send(
            `${tag} You do not have any permission to use this command.`
          )
        }
      })
}
