module.exports = (client) => {
    client.on('message', (msg) => {
        if (msg.content === '!afk'){
            msg.reply("IS AFK")
            
    }
    })
    }
  