
    const { badwords } = require("./data.json") 
    module.exports = (client) => {
    client.on('message', async message => {
      console.log(message.content);

      // if message includes discorcl / .ru / knife : Add role "Muted"
      const msg = message.content.toLowerCase();
      const report = client.channels.cache.get('937602764341661727')
  const { MessageEmbed } = require('discord.js');
      if (
        msg.includes('ประยุทธ์') ||
        msg.includes('ประวิทย์') ||
        msg.includes('ประยุด') ||
        msg.includes('ประยุท') ||
        msg.includes('ปลาหยุด') ||
        msg.includes('ประวิด') ||
        msg.includes('ประวิท') ||
        msg.includes('เสือก') ||
        msg.includes('ตู่') ||
        msg.includes('ป้อม') ||
        msg.includes('prayuth') ||
        msg.includes('prayut') ||
        msg.includes('ลุงตู่') ||
        msg.includes('prawit') ||
        msg.includes('นะจ๊ะ') 
      ) {
        const exampleEmbed = new MessageEmbed()
        .setColor('#F1C40F')
        .setTitle('POLITICAL DETECT')
        
        .addFields(
            { name: 'User', value: `${message.author.username}`, inline: true},
            { name: 'Moderator', value: `<@!867031115373215795>`, inline: true },
        )
        .setFooter('KAOLADBOT');
        // Delete message
        await message.delete();
        report.send(exampleEmbed);
        await message.author.send('STOP USE POLITICALWORD ALSO MUTE ROLE WILL AUTO DELETE');
        console.log('Muted role added to', message.author.username);
        let mutedRole = message.guild.roles.cache.find(
          role => role.name === 'Muted'
        );
        let defaultRole = message.guild.roles.cache.find(
          role => role.name === 'Member'
        );
    
        message.member.roles.add(mutedRole);
        message.member.roles.remove(defaultRole);
    
        message.reply('You are muted for 10s! because you use political word');
    
        setTimeout(() => {
          message.member.roles.remove(mutedRole);
          message.member.roles.add(defaultRole);
        }, 60 * 1000);
      }
    });
    }