const command = require('./command') 
const { MessageEmbed } = require('discord.js');
module.exports = (client) => {
  command(client, 'mute', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`
    const report = client.channels.cache.get('937602764341661727')

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('MANAGE_ROLES') ||
      member.hasPermission('MUTE_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        const exampleEmbed = new MessageEmbed()
        .setColor('#F1C40F')
        .setTitle('MUTE REPORT')
        
        .addFields(
            { name: 'Mute by', value: `${message.author.username}`, inline: true},
            { name: 'Mute', value: `${target.username}`, inline: true},
            { name: 'Moderator', value: `<@!867031115373215795>`, inline: true },
        )
        .setFooter('KAOLADBOT');
        report.send(exampleEmbed);
        console.log('Mute', message.author.username);
    let mutedRole = message.guild.roles.cache.find(
      role => role.name === 'Muted'
    );
    let defaultRole = message.guild.roles.cache.find(
      role => role.name === 'Member'
    );

    targetMember.roles.add(mutedRole);
    targetMember.roles.remove(defaultRole);


        message.channel.send(`${tag} That user has been muted,`)
      } else {
        message.channel.send(`Please tag someone to muted.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have any permission to use this command.`
      )
    }
  })
}
