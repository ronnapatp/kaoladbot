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
            targetMember.send(`⚠️You have been warn by ${message.author.username} ⚠️`);
            targetMember.send(`https://tenor.com/view/warning-lights-cops-emergency-gif-6098038`);
            message.channel.send(`${tag} That user has been warn in dm.`)
            client.channels.cache.get('853526088473640971').send(`${message.author.username} Just warn ${target.username}`)

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
