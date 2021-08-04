const command = require('./command') 

module.exports = (client) => {
    command(client, 'warn', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            message.channel.send(`${tag.member} has been warn`)
          } else {
            message.channel.send(`Please tag someone to warn.`)
          }
        } else {
          message.channel.send(
            `${tag} You do not have any permission to use this command.`
          )
        }
      })
}
