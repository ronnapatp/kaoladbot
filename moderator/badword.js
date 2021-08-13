const { badwords } = require("./data.json") 
module.exports = (client) => {
client.on('message', async message => {
  console.log(message.content);

  // if message includes discorcl / .ru / knife : Add role "Muted"
  const msg = message.content.toLowerCase();

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
    msg.includes('shit')

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

    message.reply('You are muted!(Mute role will be delete from you soon) because you use bad word');

    setTimeout(() => {
      message.member.roles.remove(mutedRole);
      message.member.roles.add(defaultRole);
    }, 100 * 1000);
  }
});
}