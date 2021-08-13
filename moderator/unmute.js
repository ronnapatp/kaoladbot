const command = require('./command') 

module.exports = (client) => {
  command(client, 'unmute', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('MANAGE_ROLES')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        console.log('Unmute', message.author.username);
    let mutedRole = message.guild.roles.cache.find(
      role => role.name === 'Muted'
    );
    let defaultRole = message.guild.roles.cache.find(
      role => role.name === 'Member'
    );

    targetMember.roles.add(defaultRole);
    targetMember.roles.remove(mutedRole);


        message.channel.send(`${tag} That user has been unmuted!`)
      } else {
        message.channel.send(`Please tag someone to unmuted.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have any permission to use this command.`
      )
    }
  })
}
