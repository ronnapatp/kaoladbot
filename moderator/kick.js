const command = require('./command') 
const { MessageEmbed } = require('discord.js');
module.exports = (client) => {
  command(client, 'kick', (message) => {
    const { member, mentions } = message
    const report = client.channels.cache.get('853526088473640971')

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        const exampleEmbed = new MessageEmbed()
    .setColor('#F1C40F')
    .setTitle('KICK REPORT')
    
    .addFields(
        { name: 'Kick by', value: `${message.author.username}`, inline: true},
        { name: 'Kick', value: `${target.username}`, inline: true},
        { name: 'Moderator', value: `<@!867031115373215795>`, inline: true },
    )
    .setFooter('KAOLADBOT');
        targetMember.send(`⚠️ ${tag}You have been kick by ${message.author.username} ⚠️`);
        targetMember.kick()
        report.send(exampleEmbed);
        message.channel.send(`${tag} That user has kicked, BYE!`)
      } else {
        message.channel.send(`Please tag someone to kick.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have any permission to use this command.`
      )
    }
  })
}
