const { MessageEmbed } = require('discord.js');

module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '$roles1'){
            msg.delete()
            msg.channel.send({files: ["https://cdn.discordapp.com/attachments/833242313060253707/833273477242421278/Roles.png"]})
      }
      })
      client.on("message" , msg => {
        if (msg.content === '$roles2'){
            msg.delete()
            msg.channel.send('<@&865443984346972201> = Role for parliament leader')
            msg.channel.send('<@&864786401471102976> = Role for priminister')
            msg.channel.send('<@&865445830939639828> = Role for owner')
            msg.channel.send('<@&865444089424117810> = Role for Minister of law')
            msg.channel.send('<@&865443444028604426> = Role for Minister of Digital Economy and Society')
            msg.channel.send('<@&865446077397860389> = Role for Minister of Education')
            msg.channel.send('<@&865447434536484924> = Role for Minister of Gaming')
            msg.channel.send('<@&849438332609232906> = Role for Bot')
            msg.channel.send('<@&864786818737635379> = Role for Admin')
            msg.channel.send('<@&864787063487463464> = Role for Lower admin')
            msg.channel.send('<@&865443431537705011> = Role for Bot developer')
            msg.channel.send('<@&846007827382140978> = Role for member')
            msg.channel.send('<@&867721601133969418> = Role for warn')
      }
      })
      client.on("message" , msg => {
        if (msg.content === '$roles3'){
            msg.delete()
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle(`How to get roles?`)
            .addFields(
                {
                    name: 'Parliament leader',
                    value: 'No give away only <@683471861459583072> and <@867031115373215795>',
                  }, 
                  {
                    name: 'Onwer',
                    value: 'No give away only <@683471861459583072>',
                  },
                  {
                    name: 'Priminister',
                    value: 'Priminister is from the election <#864329895151796264> Now is <@543604773341888544>',
                  },
                  {
                    name: 'Minister of law',
                    value: 'Appointee from Priminister',
                  },
                  {
                    name: 'Minister of Digital Economy and Society',
                    value: 'Appointee from Priminister',
                  },
                  {
                    name: 'Minister of Education',
                    value: 'Appointee from Priminister',
                  },
                  {
                    name: 'Minister of Gaming',
                    value: 'Appointee from Priminister',
                  },
                  {
                    name: 'Bot',
                    value: 'For bot bot bot',
                  },
                  {
                    name: 'Admin',
                    value: 'For admin',
                  },
                  {
                    name: 'Lower admin',
                    value: 'For lower admin',
                  },
                  {
                    name: 'Bot developer',
                    value: 'For Bot developer',
                  },
                  {
                    name: 'Member',
                    value: 'Roles for everyone',
                  },
                  {
                    name: 'Warning',
                    value: 'Roles for warn',
                  },)
            .setFooter('Sever roles');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
    client.on("message" , msg => {
        if (msg.content === '$roles4'){
            msg.delete()
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle(`Roles by Priminister`)
            .addFields(
                {
                    name: 'Sano',
                    value: 'Create by <@543604773341888544>',
                  }, 
                  {
                    name: 'ปูมปามปี่',
                    value: 'Create by <@543604773341888544>',
                  },
                  {
                    name: 'ประชาชน',
                    value: 'Create by <@543604773341888544>',
                  },)
            .setFooter('Sever roles');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
}