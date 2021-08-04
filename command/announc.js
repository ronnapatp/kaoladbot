module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!announcement'){
            msg.channel.send("Please go to <#853570792973008907> 😄");
      }
      })
      client.on("message" , msg => {
        if (msg.content === '!scitest'){
            msg.delete()
            msg.channel.send("Science test today. **DO NOT CHEAT!** Goodluck😄");
      }
      })
      client.on("message" , msg => {
        if (msg.content === '!mathtest'){
            msg.delete()
            msg.channel.send("Math test today. **DO NOT CHEAT!** Goodluck😄");
      }
      })
      client.on("message" , msg => {
        if (msg.content === '!test'){
            msg.delete()
            msg.channel.send("Test today. **DO NOT CHEAT!** Goodluck😄");
      }
      })
}
//msg.delete()