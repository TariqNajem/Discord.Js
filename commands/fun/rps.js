const discord = require('discord.js')



module.exports = {
	name: "rps",
	description: "play a game of rock, paper and scissors",
	run: async(client, message, args) => {
		let embed = new discord.MessageEmbed()
		.setTitle("لعبة حجرة ورقة مقص")
		.setDescription("اختار لبدأ اللعبة")
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }
		console.log(`RPS GAME : ${message.author.username }`);

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("النتيجة")
        		.addField("اختيارك", `${reaction.emoji.name}`)
        		.addField("اختياري", `${me}`)
			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("! لقد خسرت");
            } else if (me === reaction.emoji.name) {
                return message.reply("! لقد تعادلنا");
            } else {
                return message.reply("! لقد ربحت");
            }
        })
        .catch(collected => {
                message.reply('لقد انتهي الوقت ');
            })
}
}


//rock paper scissor Game - لعبة حجرة ورقة مقص