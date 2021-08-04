module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!inviteme'){
            msg.channel.send("https://discord.com/api/oauth2/authorize?client_id=867031115373215795&permissions=0&scope=bot")
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!github'){
            msg.channel.send("https://github.com/ronnapatp/kaoladbot")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'mee6'){
            msg.channel.send("They so noob, I'm better!")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'kumibot'){
            msg.channel.send("My best friend!")
    }
    })
}