const { MessageEmbed } = require('discord.js');

module.exports = (client) => {
    client.on("message" , msg => {
        if (msg.content === '!rulesth'){
            const exampleEmbed = new MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('กฎของดิสคอร์ดเรา')
            .setDescription('สำหรับภาษาอังกฤษกรุณาใช้คำสั่ง `!rules`')
            .addFields({ name: "กฎข้อที่ 1",
            value: "กรุณางดการสแปมสติกเกอร์และอิโมจิ!"})
            .addFields({ name: "กฎข้อที่ 2",
            value: "กรุณางดสร้างความรำคาญ !"})
            .addFields({ name: "กฎข้อที่ 3",
            value: "ห้ามพูดเรื่องทางเพษ !"})
            .addFields({ name: "กฎข้อที่ 4",
            value: "งดเรื่องการเมือง !"})
            .addFields({ name: "กฎข้อที่ 5",
            value: "กรุณาแจ้งชื่อจริงของท่าน!"})
            .addFields({ name: "กฎข้อที่ 6",
            value: "กรุณาใช้ชื่อจริงของท่าน!"})
            .addFields({ name: "กฎข้อที่ 7",
            value: "กรุณาไท่เหยียดเชื้อชาติ ชนชาติ หรือสีผิว เราไม่สนว่าคุณเป็นใครเเต่ในดิสคอร์นี้ทุกคนเท่าเทียมกัน!"})
            .addFields({ name: "กฎข้อที่ 8",
            value: "ห้ามเเท็ก @EVERYONE ให้ใช้ @HERE เเทน!"})
            .setFooter('บทลงโทษจะขึ้นอยู่กับประธานสภาพิจารณา');
        
            msg.channel.send(exampleEmbed);
            
    }
    })
}