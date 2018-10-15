const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('NTAxMDcyMTY4NzYzOTE2MzE5.DqY5Ig.yxFWAR-SpoUDvYZhqaCIt2EFXNs')
bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})
