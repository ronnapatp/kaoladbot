module.exports = (client) => {
    client.on("message", msg =>{
        let wordArray = msg.content.split(" ");
        console.log(wordArray);
    
        let filterWords = [];
    
        for (var i = 0; i < filterWords.length; i++) {
            if (wordArray.includes(filterWords[i])) {
                msg.react('👎');
                msg.reply(`การเมืองอีกเเล้ว อ่านกฎดิวะ<#853526088473640970> หรือพิมพ์ !rules`);
                break;
            }
        }
    })
    }