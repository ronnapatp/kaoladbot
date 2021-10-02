// This include King Stuff
module.exports = (client) => {
client.on('message', async message => {


  // if message includes discorcl / .ru / knife : Add role "Muted"
  const msg = message.content.toLowerCase();
  const report = client.channels.cache.get('853526088473640971')
  const { MessageEmbed } = require('discord.js');

  if (
    msg.includes('ไอ้ทรพี') ||
    msg.includes('youtu.be/N0JGZLLYvHg') ||
    msg.includes('www.youtube.com/watch?v=N0JGZLLYvHg')
  ) {
    const exampleEmbed = new MessageEmbed()
    .setColor('#F1C40F')
    .setTitle('Inappropriate Content DETECTED')
    
    .addFields(
        { name: 'User', value: `${message.author.username}`, inline: true},
        { name: 'Moderator', value: `<@683471861459583072>`, inline: true },
    )
    .setFooter('KAOLADBOT');
    // Delete message
    await message.delete();
    report.send(exampleEmbed);
    await message.author.send('Please dont use Inappropriate Word');
    console.log('Muted role added to', message.author.username);
    let mutedRole = message.guild.roles.cache.find(
      role => role.name === 'Muted'
    );
    let defaultRole = message.guild.roles.cache.find(
      role => role.name === 'Member'
    );

    message.member.roles.add(mutedRole);
    message.member.roles.remove(defaultRole);

    message.reply('You are muted!(Mute role will be delete from you in 60 Second) because you use Inappropriate word');

    setTimeout(() => {
      message.member.roles.remove(mutedRole);
      message.member.roles.add(defaultRole);
    }, 60 * 1000);
  }
});
}
