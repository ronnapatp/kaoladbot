const { MessageEmbed } = require('discord.js');

module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!rules'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('SEVER RULES')
            .setDescription('In Thai use `!rulesth` command')
            .addFields({ name: "Rules number 1",
            value: "Do not spam massages emoji image or sticker !"})
            .addFields({ name: "Rules number 2",
            value: "Do not annoy other people !"})
            .addFields({ name: "Rules number 3",
            value: "Not thing about Sex !"})
            .addFields({ name: "Rules number 4",
            value: "Not thing about political !"})
            .addFields({ name: "Rules number 5",
            value: "When you come in tell us, Who you are !"})
            .addFields({ name: "Rules number 6",
            value: "You must use your real name only !"})
            .addFields({ name: "Rules number 7",
            value: "Do not racist. I don't care if you are god but in this sever everyone are same!"})
            .addFields({ name: "Rules number 8",
            value: "Do not tag @EVERYONE please use @HERE!"})
            .setFooter('The penalty will depend on the parliament leader.');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
}