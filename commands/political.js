const { MessageEmbed } = require('discord.js');

module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!leaderofthailand'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Priminister of Thailand')
            .setDescription('ประยุทธ์ จันทร์โอชา')
            .setImage('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fchiangraitimes.com%2Fwp-content%2Fuploads%2F2014%2F09%2Fprayuth.gif&f=1&nofb=1')
            .setFooter('Suggest country at !github');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!leaderofkorea'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('President of Korea')
            .setDescription('Moon Jae-in')
            .setImage('https://duckduckgo.com/i/6a07047a.jpg')
            .setFooter('Suggest country at !github');
            msg.channel.send(exampleEmbed);   
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!leaderofjapan'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Priminister of Japan')
            .setDescription('Yoshihide Suga')
            .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Yoshihide_Suga_20210101.jpg/215px-Yoshihide_Suga_20210101.jpg')
            .setFooter('Suggest country at !github');
            msg.channel.send(exampleEmbed);   
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!leaderofus'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('President of USA')
            .setDescription('Joe Biden')
            .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/220px-Joe_Biden_presidential_portrait.jpg')
            .setFooter('Suggest country at !github');
            msg.channel.send(exampleEmbed);   
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!leaderofcannada'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Priminister of Cannada')
            .setDescription('Justin Trudeau')
            .setImage('https://duckduckgo.com/i/0c77bdff.jpg')
            .setFooter('Suggest country at !github');
            msg.channel.send(exampleEmbed);   
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!leaderofisrael'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('President of Israel')
            .setDescription('Isaac Herzog')
            .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/President-elect_Isaac_Herzog%2C_June_2021.jpg/220px-President-elect_Isaac_Herzog%2C_June_2021.jpg')
            .setFooter('Suggest country at !github');
            msg.channel.send(exampleEmbed);   
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!leaderofchina'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('President of China')
            .setDescription('Xi Jinping')
            .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AIiPheBz8LUaLhj6GyeaoAHaE8%26pid%3DApi%26h%3D160&f=1')
            .setFooter('Suggest country at !github');
            msg.channel.send(exampleEmbed);   
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!leaderofuk'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('Priminister of United Kingdom')
            .setDescription('Boris Johnson')
            .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/220px-Boris_Johnson_official_portrait_%28cropped%29.jpg')
            .setFooter('Suggest country at !github');
            msg.channel.send(exampleEmbed);   
    }
    })
    client.on("message" , msg => {
        if (msg.content === '!leaderoffrance'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('President of France')
            .setDescription('Emmanuel Macron')
            .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sUtUHfrypdX8szIV4dtERAHaE7%26pid%3DApi%26h%3D160&f=1')
            .setFooter('Suggest country at !github');
            msg.channel.send(exampleEmbed);   
    }
    })
}