const { MessageEmbed } = require('discord.js');


module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!severinfo'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle(`Server info for Hi I bored Community`)
            .addFields(
                {
                    name: 'Name',
                    value: 'Hi I bored Community',
                    inline: true 
                  }, 
                  {
                    name: 'Owner',
                    value: '<@683471861459583072>',
                    inline: true 
                  },
                  {
                    name: 'Priminister',
                    value: '<@543604773341888544>',
                    inline: true 
                  },
                  {
                    name: 'Kaolad bot',
                    value: '<@867031115373215795>',
                    inline: true 
                  },
                  {
                    name: 'Sever rules',
                    value: '<#853526088473640970>',
                    inline: true 
                  },
                  {
                    name: 'Sever announcement',
                    value: '<#853570792973008907>',
                    inline: true 
                  })
            .setFooter('Sever info');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
}