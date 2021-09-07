
module.exports = (client) => {
client.on('message', async message => {


  // if message includes discorcl / .ru / knife : Add role "Muted"
  const msg = message.content.toLowerCase();
  const report = client.channels.cache.get('853526088473640971')
  const { MessageEmbed } = require('discord.js');

  if (
    msg.includes('หี') ||
    msg.includes('ควย') ||
    msg.includes('เหี้ย') ||
    msg.includes('สัส') ||
    msg.includes('หน้าหี') ||
    msg.includes('ไอสัส') ||
    msg.includes('ไอเหี้ย') ||
    msg.includes('เสือก') ||
    msg.includes('fucker') ||
    msg.includes('fuck') ||
    msg.includes('bitch') ||
    msg.includes('cock') ||
    msg.includes('dick') ||
    msg.includes('pussy') ||
    msg.includes('shit') ||
    msg.includes('vagina') ||
    msg.includes('HEE')

  ) {
    const exampleEmbed = new MessageEmbed()
    .setColor('#F1C40F')
    .setTitle('BADWORD DETECT')
    
    .addFields(
        { name: 'User', value: `${message.author.username}`, inline: true},
        { name: 'Moderator', value: `<@!867031115373215795>`, inline: true },
    )
    .setFooter('KAOLADBOT');
    // Delete message
    await message.delete();
    report.send(exampleEmbed);
    await message.author.send('STOP USE BADWORD ALSO MUTE ROLE WILL AUTO DELETE');
    console.log('Muted role added to', message.author.username);
    let mutedRole = message.guild.roles.cache.find(
      role => role.name === 'Muted'
    );
    let defaultRole = message.guild.roles.cache.find(
      role => role.name === 'Member'
    );

    message.member.roles.add(mutedRole);
    message.member.roles.remove(defaultRole);

    message.reply('You are muted!(Mute role will be delete from you soon) because you use bad word');

    setTimeout(() => {
      message.member.roles.remove(mutedRole);
      message.member.roles.add(defaultRole);
    }, 100 * 1000);
  }
});
}
