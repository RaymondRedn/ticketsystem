const discord = require('discord.js')
const client = new discord.Client()
const prefix = "?"

client.on('ready',()=>{
    console.log(`${client.user.username} ready`)
    client.user.setActivity(name = "Helper", type = "WATCHING")
})
