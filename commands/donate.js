const { MessageEmbed } = require('discord.js');

module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!donate'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Donate😄')
            .setDescription('Choose what platform')
            .addFields(
                { name: 'Ko-fi', value: 'https://ko-fi.com/bhira'},
                { name: 'True money wallet', value: '0814682224'},
                { name: 'Paypal', value: 'coming soon!'},
            )
            .setFooter('THANK YOU FOR DONATING');
        
            msg.channel.send(exampleEmbed);
            
    }
    })

}