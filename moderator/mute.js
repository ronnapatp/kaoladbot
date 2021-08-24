const command = require('./command') 

module.exports = (client) => {
  command(client, 'mute', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('MANAGE_ROLES') ||
      member.hasPermission('MUTE_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
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
