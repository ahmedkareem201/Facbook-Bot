var app = require('express')();
var server = require('http').Server(app);
var MessengerPlatform = require("facebook-bot-messenger");

var bot = MessengerPlatform.create({
    pageID: "102014718773729",
    appID: "232278325142641",
    appSecret: "2504b5f1c21f3de8476dba54dffc34f5",
    validationToken: "myhookisrandomohyeah",
    pageToken:
        "EAADTQYMPJHEBAOZBxGMQZAQgcsCJaBjIO5xd5OjCCCbSoXVZBXI6x4FJigaKtZAUjlZAss4LipaPmhA170vbSasIsubXa4DPN5KFcf8ongvH3GINySBlcD6n94uPrmTRoHCi1R0z1JUX7M99W8HGLGmNWWFOo4RZAqZBPyXvZCKhwnmgI9hhIkZBT",
}, server);
app.use(bot.webhook('/webhook'));
bot.on(MessengerPlatform.Events.MESSAGE, function (userId, message) {
    bot.sendTextMessage(userId, `hello test test ${userId}`);
});

//setInterval(function(){ bot.sendTextMessage("3963703613712136", "قوم ذاكر"); }, 3000);
bot.listen(8080);
