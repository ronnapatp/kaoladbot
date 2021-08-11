module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!announcement'){
            msg.channel.send("Please go to <#853570792973008907> 😄");
      }
      })
      // Big test
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
      // Room test
    // History
    client.on("message" , msg => {
      if (msg.content === '!1test'){
          msg.delete()
          msg.channel.send("M.1/1 test today. **DO NOT CHEAT!** Goodluck😄");
    }
    })
    client.on("message" , msg => {
      if (msg.content === '!2test'){
          msg.delete()
          msg.channel.send("M.1/2 test today. **DO NOT CHEAT!** Goodluck😄");
    }
    })
    client.on("message" , msg => {
      if (msg.content === '!3test'){
          msg.delete()
          msg.channel.send("M.1/3 test today. **DO NOT CHEAT!** Goodluck😄");
    }
    })
    client.on("message" , msg => {
      if (msg.content === '!4test'){
          msg.delete()
          msg.channel.send("M.1/4 test today. **DO NOT CHEAT!** Goodluck😄");
    }
    })
    client.on("message" , msg => {
      if (msg.content === '!5test'){
          msg.delete()
          msg.channel.send("M.1/5 test today. **DO NOT CHEAT!** Goodluck😄");
    }
    })
    client.on("message" , msg => {
      if (msg.content === '!6test'){
          msg.delete()
          msg.channel.send("M.1/6 test today. **DO NOT CHEAT!** Goodluck😄");
    }
    })
    client.on("message" , msg => {
      if (msg.content === '!7test'){
          msg.delete()
          msg.channel.send("M.1/7 test today. **DO NOT CHEAT!** Goodluck😄");
    }
    })



    // Normal test
      client.on("message" , msg => {
        if (msg.content === '!test'){
            msg.delete()
            msg.channel.send("Test today. **DO NOT CHEAT!** Goodluck😄");
      }
      })
      client.on("message" , msg => {
        if (msg.content === '$school'){
            msg.delete()
            msg.channel.send("@here Today at 7.40 AM. We have a school event. **Don't forget to join!** https://chula.zoom.us/j/4382025645?pwd=NklwR1dEN2VZWjlCalNHcEp4bW4rQT09😄");      }
      })
}
//msg.delete()