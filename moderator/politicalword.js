
    const { badwords } = require("./data.json") 
    module.exports = (client) => {
    client.on('message', async message => {
      console.log(message.content);
    
      // if message includes discorcl / .ru / knife : Add role "Muted"
      const msg = message.content.toLowerCase();
    
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
        // Delete message
        await message.delete();
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
        }, 10 * 1000);
      }
    });
    }