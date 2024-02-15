const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip",
    description: "flips a coin!",
    run: async(client, message, args) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        console.log(`coin flip GAME : ${message.author.username }`);
        message.channel.send(embed)
    }
}

// Coinflip Game 