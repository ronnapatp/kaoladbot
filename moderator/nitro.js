const command = require('./command') 

module.exports = (client) => {
    command(client, 'freenitro', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('SEND_MESSAGES')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.send(`Seem like ${tag} want to give you free nitro! CONTACT HIM`);
            message.channel.send(`${tag} I send the ways to get free nitro in dm.`)
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
