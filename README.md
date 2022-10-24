<div align="center">
  <h1>popcat-api-wrapper-v2</h1>
  <p>
    <a href="https://www.npmjs.com/package/popcat-api-wrapper-v2"><img src="https://img.shields.io/npm/v/popcat-api-wrapper-v2?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/popcat-api-wrapper-v2"><img src="https://img.shields.io/npm/dt/popcat-api-wrapper-v2?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/popcat-api-wrapper-v2r"><img src="https://nodei.co/npm/popcat-api-wrapper-v2.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

## Installation
```
npm i popcat-wrapper
```

## Examples
### Jokes command, no input example:
```js
const pop = require("popcat-api-wrapper-v2")
const Discord = require("discord.js")
const client = new Discord.Client({
  intents: ['Guilds', 'GuildMessages', 'GuildMembers'] 
})


client.on("messageCreate", async (message) => {
if (message.content.toLowerCase() === ">joke") {
  const joke = await pop.joke()
  joke.then((res) => {
    message.channel.send(res)
  })
}
})

client.login("bot token")

```

### Biden command, 1 text input example
```js
const pop = require('popcat-api-wrapper-v2')
const Discord = require('discord.js')

const text = "String"
const img = await pop.biden(text)
const image = new Discord.AttachmentBuilder(img, { name: "biden.png"})
message.channel.send({
  files: [image]
})
```

###  Pooh meme command, more than one text input example
```js
const pop = require('popcat-api-wrapper-v2')
const Discord = require('discord.js')

const text1 = "String"
const text2 = "String 2"
const img = await pop.pooh(text1, text2)
const image = new Discord.AttachmentBuilder(img, { name: "pooh.png" })
message.channel.send({
  files: [image]
})

```

### Drip command, image input example
```js
const Discord = require("discord.js");
const pop = require('popcat-api-wrapper-v2')

let user = message.mentions.users.first() || message.author
const av = user.displayAvatarURL()

const image = await pop.drip(av)

image.then(() => {
  const attachment = new Discord.AttachmentBuilder(res, { name: "drip.png" })
  message.channel.send({
    files: [attachment]
  })
})
```

### Color command, object output example:

```js
const pop = require("popcat-api-wrapper-v2")

const color = "ffcc99"
const output = await pop.colorinfo(color)
output.then((res) => {
    console.log(res)
})
 /**
 {
 "hex": "#ffcc99",
 "name": "Peach Orange",
 "rgb": "rgb(255,204,153)",
 "color_image": "https://api.popcat.xyz/color/image/ffcc99",
 "brightened": "#ffe6cc"
}*/
```
So, if you want to collect for example the rgb, you need to:

`
console.log(output.rgb)
` (gives out the rgb value of 'ffcc99' hex.)

 This method applies for Playstore, iTunes, WouldYouRather, RandomMeme, instagramUser, npm and Colorinfo.


### Welcome Card

```js
const pop = require('popcat-api-wrapper-v2')
const Discord = require("discord.js")
const image = await pop.welcomecard(background, avatar, text_1, text_2, text_3)
image.then(() => {
  const attachment = new Discord.AttachmentBuilder(image, { name: "welcomecard.png" })
<Channel>.send({ files: [attachment] })
})
```

## Endpoints
You can get a full list of the possible API endpoints [Here](https://api.popcat.xyz/)