<div align="center">
  <h1>popcat-api-wrapper-v2</h1>
  <p>
    <a href="https://www.npmjs.com/package/popcat-api-wrapper-v2r"><img src="https://nodei.co/npm/popcat-api-wrapper-v2.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

## Installation

```
npm i @mrbeastprolevel/popcat-api-wrapper-v2
```

## Examples

### Jokes command, no input example:

```js
const pop = require("@mrbeastprolevel/popcat-api-wrapper-v2");
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers"],
});

client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === ">joke") {
    const joke = await pop.joke();
    joke.then(async (res) => {
      message.channel.send(res);
    });
  }
});

client.login("bot token");
```

### Biden command, 1 text input example

```js
const pop = require("@mrbeastprolevel/popcat-api-wrapper-v2");
const Discord = require("discord.js");

const text = "String";
const img = await pop.biden(text);
img.then(() => {
  const image = new Discord.AttachmentBuilder(img, { name: "biden.png" });
  message.channel.send({
    files: [image],
  });
});
```

### Pooh meme command, more than one text input example

```js
const pop = require("@mrbeastprolevel/popcat-api-wrapper-v2");
const Discord = require("discord.js");

const text1 = "String";
const text2 = "String 2";
const img = await pop.pooh(text1, text2);
img.then(() => {
  const image = new Discord.AttachmentBuilder(img, { name: "pooh.png" });
  message.channel.send({
    files: [image],
  });
});
```

### Drip command, image input example

```js
const Discord = require("discord.js");
const pop = require("@mrbeastprolevel/popcat-api-wrapper-v2");

let user = message.mentions.users.first() || message.author;
const av = user.displayAvatarURL();

const image = await pop.drip(av);

image.then(() => {
  const attachment = new Discord.AttachmentBuilder(res, { name: "drip.png" });
  message.channel.send({
    files: [attachment],
  });
});
```

### Lyrics command, object output example :
```js
const pop = require("@mrbeastprolevel/popcat-api-wrapper-v2");
const song = "Zayn Vibez" // Song name
const lyrics = pop.lyrics(song)
lyrics.then(async (res) => {
    console.log(res) // This will return an object with the song name, artist, and lyrics etc.
    // console.log(data[0].lyrics) -> To get the lyrics only
    // console.log(data[0].artist) -> To get the artist only
    // console.log(data[0].title) -> To get the song name only
    // console.log(data[0].album) -> To get the album name only 
    // console.log(data[0].image) -> To get the album image only
})

/**
 {
   lyrics: 'Lyrics',
   artist: 'Artist',
   title: 'Title',
   album: 'Album',
  image: 'Image'
 }*/
```
### Color command, object output example :

```js
const pop = require("@mrbeastprolevel/popcat-api-wrapper-v2");

const color = "ffcc99";
const output = await pop.colorinfo(color);
output.then(async (res) => {
  console.log(res);
});
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

`console.log(output.rgb)` (gives out the rgb value of 'ffcc99' hex.)

This method applies for Playstore, iTunes, WouldYouRather, RandomMeme, instagramUser, npm and Colorinfo.

### Welcome Card

```js
const pop = require('@mrbeastprolevel/popcat-api-wrapper-v2')
const Discord = require("discord.js")
const image = await pop.welcomecard(background, avatar, text_1, text_2, text_3)
image.then(() => {
  const attachment = new Discord.AttachmentBuilder(image, { name: "welcomecard.png" })
<Channel>.send({ files: [attachment] })
})
```

## Endpoints

You can get a full list of the possible API endpoints [Here](https://api.popcat.xyz/)

## Support

DM `Zayn#9478` For Help & Support

![](https://discord.c99.nl/widget/theme-1/767627938433597450.png)  
