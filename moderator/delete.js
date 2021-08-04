module.exports = (client) => {
    client.on('message', function(message) {
        if(message.content.startsWith("!clear")){
            const amount = message.content.split(" ")[1];
            if(!amount)
            {
                message.reply(`!clear <amount> "DO NOT CLEAR MORE THAN 10 MESSAGE"`);
                return;
            }
             if(!message.member.hasPermission("MANAGE_MESSAGES"))
             {
                message.channel.send(`${message.author.username} You have no permissions to do that`);
                return;
             }
            message.channel.bulkDelete(amount)
        .then(messages => message.channel.send(`Messages deleted by ${message.author.username}`))
        .catch(console.error);
        }
    
    });
}
