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
    client.on("message" , msg => {
        if (msg.content === 'gordon ramsay'){
            msg.channel.send("Uncle gordon FUIYO!")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'chilli jam'){
            msg.channel.send("Haiyaaa! This is how to trick white people to eat chilli.")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'thai green curry'){
            msg.channel.send("Do not go to watch jamie oliver cook this menu. Haiyaa!")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'msg'){
            msg.channel.send("THE KING OF FLAVOR!")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'prayuth'){
            msg.channel.send("Hell stop speak about pr*y**h")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'เราจะทำตามสัญญา'){
            msg.channel.send("ขอเวลาอีกไม่นาน Kaolad bot ไม่ได้กล่าว")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'pfizer'){
            msg.channel.send("บินไปฉีดดีกว่า")
    }
    })
    client.on("message" , msg => {
        if (msg.content === 'mRNA'){
            msg.channel.send("ไม่ใช่มรณะ")
    }
    })
    client.on("message" , msg => {
        if (msg.content === `<@!867031115373215795>`){
            msg.channel.send(`Oh for help use !help. This bot is create by ronnapatp and bhira`)
    }
    })
}
