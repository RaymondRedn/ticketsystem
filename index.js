const discord = require('discord.js')
const client = new discord.Client()
const prefix = "m?"

client.on('ready',()=>{
    console.log(`${client.user.username} ready`)
    client.user.setActivity(name = "m?", type = "WATCHING")
})