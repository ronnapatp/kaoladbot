const { badwords } = require("./data.json") 
module.exports = (client) => {
client.on("message", msg =>{
    let wordArray = msg.content.split(" ");
    console.log(wordArray);

    let filterWords = ["หี", "ควย", "เหี้ย", "สัส","หน้าหี","ไอสัส","ไอเหี้ย","เสือก","fucker","fuck","bitch","cock","dick","pussy","vagina","Fucker","Fuck","Bitch","Cock","Dick","Pussy","Vagina","FUCKER","FUCK","BITCH","COCK","DICK","PUSSY","VAGINA","idk","IDK","fuked","shit","Shit","SHIT","อีดอก","อีสัตว์","อีควาย","อีตอแหล","ไอ้ระยำ","ไอ้เบื๊อก","เฮงซวย","อีหน้าเปรต","ไอ้หน้าโง่","ไอสลัด","ไอหน้าด้าน"];

    for (var i = 0; i < filterWords.length; i++) {
        if (wordArray.includes(filterWords[i])) {
            msg.delete()
            msg.reply(`อ่านกฎดิ อย่าใช้คำหยาบ <#853526088473640970> หรือพิมพ์ !rules`);
            break;
        }
    }
})
}