const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client({
    allowedMentions: {
        parse: ["roles", "users"],
        repliedUser:false,
    },
    partials: ["MESSAGE","CHANNEL"],
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILDS_MEMBERS,
        Discord.Intents.FLAGS.GUILDS_MESSAGES,
    ],
});
client.on("ready",() =>{
    console.log(`${client.user.usernae} is ready to use`)
})
client.login(config.token)