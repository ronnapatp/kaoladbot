module.exports = (client) => {
    const channelId = '841948325406048267' // welcome channel
  
    client.on('guildMemberAdd', (member) => {
      const message = `Welcome <@${
        member.id
      }> to Hi I bored community server! Please check out`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }