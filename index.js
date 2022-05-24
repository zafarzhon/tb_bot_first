const TelegramApi = require('node-telegram-bot-api')

const token = '5190922969:AAFxYFNDMuRnH8jqaIxdkdjIP0pKR0at18Q'

const bot = new TelegramApi(token,{polling: true})

bot.setMyCommands([
    {command: '/start',description: 'Начальное приветствие'},
    {command: '/info',description: 'Получить инфорамацию о пользователе'},
    {command: '/start',description: 'Начальное приветствие'},
    {command: '/start',description: 'Начальное приветствие'},

])

let arrchive = []
bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const firstName = msg.chat.first_name;
    if(text === '/start'){
        bot.sendMessage(chatId, `Добро пожаловать в телеграм бот ${firstName}`)
    }
})
