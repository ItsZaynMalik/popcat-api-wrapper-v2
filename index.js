const fetch = require('node-fetch')
const baseurl = 'https://api.popcat.xyz/'

async function request(endpoint, input='') {
 const res = `${baseurl}${endpoint}?${input}`
 return res;
}
module.exports.npm = async function(pkg) {
  if(!pkg) throw new Error("The field 'package name' was left empty in the NPM function!")
  const url = `https://api.popcat.xyz/npm?q=${encodeURIComponent(pkg)}`
  const res = await fetch(url)
  const obj = await res.text()
  const js = JSON.parse(obj)
  if(js.error) throw new Error(js.error)
  else {
    return js;
  }
}
module.exports.github = async function(name) {
if(!name) throw new Error("The field 'username' was left empty in the Github function!")
  const url = `https://api.popcat.xyz/github/${encodeURIComponent(name)}`
  const res = await fetch(url)
  const js = await res.json()
  return js;
}
module.exports.fact = async function() {
  const url = `https://api.popcat.xyz/fact`
  const fa = await fetch(url)
  const fact = await fa.json()
  const final = fact.fact;
  return final
}
module.exports.instagramUser = async function(username) {
  if(!username) throw new Error("The field 'username' was left empty in the instagramUser function!")
  const name = username;
  const url = `https://api.popcat.xyz/instagram?user=${name.split(" ").join("_")}`
  const res = await fetch(url)
  const account = await res.text()
  if(account.includes("error")) throw new Error("Not a valid instagram user!")
  const js = JSON.parse(account)
  return js;
}
module.exports.lyrics = async function(song) {
  if(!song) throw new Error("The field 'song' was left empty in the lyrics function.")
  let name = song
  const res = await fetch(`https://api.popcat.xyz/lyrics?song=${name.split(" ").join("+")}`)
  let json = await res.json()
  if(json.error) throw new Error(json.error)
  return json
}
module.exports.drake = async function(text1, text2) {
   if(!text1) throw new Error('The field text1 was left empty in the drake function')
    if(!text2) throw new Error('The field text2 was left empty in the drake function')
    const input = `text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const response = await request('drake', input)
    return response
}
module.exports.pooh = async function(text1, text2) {
   if(!text1) throw new Error('The field text1 was left empty in the pooh function')
    if(!text2) throw new Error('The field text2 was left empty in the pooh function')
    const input = `text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const response = await request('pooh', input)
    return response
}
module.exports.ship = async function(image1, image2) {
  if(!image1) throw new Error('The field image1 was left empty in the ship function. Need help? https://dsc.gg/popcatcom')
   if(!image2) throw new Error('The field image2 was left empty in the ship function. Need help? https://dsc.gg/popcatcom')
   const input = `user1=${encodeURIComponent(image1)}&user2=${encodeURIComponent(image2)}`
   const response = await request('ship', input)
   return response;
}
module.exports.colorify = async function(image, color) {
  if(!image) throw new Error("The field 'image' was left empty in the colorify function. Need help? https://dsc.gg/popcatcom")
  if(!color) throw new Error("The field 'color' was left empty in the colorify function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}&color=${encodeURIComponent(color)}`
  const res = await request('colorify', input)
  return res;
}
module.exports.biden = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the biden function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(text)}`
  const res = await request('biden', text)
  return res;
}
module.exports.joke = async function() {
  const res = await fetch("https://api.popcat.xyz/joke")
  .then(res => res.json())
  .then(json  => function() {
    return json.joke
  })
}
module.exports.pikachu = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the pikachu function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(text)}`
  const res = await request('pikachu', text)
  return res;
}
module.exports.drip = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the drip function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('drip', input)
  return res;
}
module.exports.clown = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the clown function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('clown', input)
  return res;
}
module.exports.translate = async function(text, to) {
  if(!text) throw new Error("The field 'text' was left empty in the translate function. Need help? https://dsc.gg/popcatcom")
  if(!to) throw new Error("The field 'to' was left empty in the translate function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(text)}&to=${encodeURIComponent(to)}`
  const res = await fetch("https://api.popcat.xyz/translate?" + input)
  const json = await res.json()
  return json.translated;
}
module.exports.reverse = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the reverse function")
  const res = await fetch(`https://api.popcat.xyz/reverse?text=${encodeURIComponent(text)}`)
  const json = await res.json()
  return json.text;
}
module.exports.uncover = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the uncover function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('uncover', input)
  return res;
}
module.exports.ad = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the ad function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('ad', input)
  return res;
}
module.exports.screenshot = async function(url) {
  if(!url) throw new Error("The field 'url' was left empty in the screenshot function.")
  const input = `url=${encodeURIComponent(url)}`
  const res = await request('screenshot', input)
  return res
}
module.exports.blur = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the blur function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('blur', input)
  return res;
}
module.exports.invert = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the invert function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('invert', input)
  return res;
}
module.exports.greyscale = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the greyscale function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('greyscale', input)
  return res;
}
module.exports.alert = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the alert function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(image)}`
  const res = await request('alert', input)
  return res;
}
module.exports.caution = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the caution function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(image)}`
  const res = await request('caution', input)
  return res;
}
module.exports.colorinfo = async function(color) {
  if(!color) throw new Error("The field 'color' was left empty in the colorinfo function. Need help? https://dsc.gg/popcatcom")
 let colour = color;
  if(colour.includes("#")) colour = colour.split("#")[1]
  const res = await fetch(`https://api.popcat.xyz/color/${encodeURIComponent(colour)}`)
  const json = await res.text()
  if(json.includes("error")) throw new Error("Invalid hex in the 'colorinfo' function!")
  const obj = JSON.parse(json)
  return obj;
}
module.exports.jokeoverhead = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the jokeoverhead function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('jokeoverhead', input)
  return res;
}
module.exports.mnm = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the mnm function. Need help? https://dsc.gg/popcatcom")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request('mnm', input)
  return res;
}
module.exports.mock = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the mock function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(text)}`
  const res = await fetch('https://api.popcat.xyz/mock?' + input)
  const json = await res.json()
  return json.text;
}
module.exports.doublestruck = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the doublestruck function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(text)}`
 const res = await fetch('https://api.popcat.xyz/doublestruck?' + input)
  const json = await res.json()
  return json.text;
}

module.exports.texttomorse = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the texttomorse function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(text)}`
 const res = await fetch('https://api.popcat.xyz/texttomorse?' + input)
  const json = await res.json()
  return json.morse;
}
module.exports.randommeme = async function() {
  const res = await fetch("https://api.popcat.xyz/meme")
  const json = await res.text()
  const obj = JSON.parse(json);
  return obj;
}
module.exports.welcomecard = async function welcomecard(background, avatar, text_1, text_2, text_3) {
if(!background) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> background is null.")
    if(!background.startsWith("https://")) throw new Error("welcomecard(background, avatar, text_1, text_2, text_3) ==> background must be a valid URL.")
    if(!background.endsWith('.png')) throw new Error("welcomecard(background, avatar, text_1, text_2, text_3) ==> background must be a PNG.")
    if(!avatar) throw new SyntaxError("welcomecard(background, avatar, text_1, text_2, text_3) ==> avatar is null")
    if(!text_1) throw new SyntaxError("welcomecard(background, avatar, text_1, text_2, text_3) ==> text_1 is null")
    if(!text_2) throw new SyntaxError("welcomecard(background, avatar, text_1, text_2, text_3) ==> text_2 is null")
    if(!text_3) throw new SyntaxError("welcomecard(background, avatar, text_1, text_2, text_3) ==> text_3 is null")
    const input = `background=${encodeURIComponent(background)}&avatar=${encodeURIComponent(avatar)}&text1=${encodeURIComponent(text_1)}&text2=${encodeURIComponent(text_2)}&text3=${encodeURIComponent(text_3)}`
    const welcomeimg = await request("welcomecard", input)
    return welcomeimg;
}
module.exports.itunes = async function(x) {
  if(!x) throw new Error("The field 'song' was left empty in the iTunes function.")
  const res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(x)}`)
  const json = await res.text()
  if(json.includes("error")) throw new Error("Song Not found on iTunes!")
  const obj = JSON.parse(json)
  return obj;
}
module.exports.chatbot = async function(x, ownername, botname) {
  if(!x) throw new Error("The field 'content' was left empty in the chatbot function.")
  if(!ownername) throw new Error("The field 'ownername' was left empty in the chatbot function.")
  if(!botname) throw new Error("The field 'botname' was left empty in the chatbot function.")
  const res = await fetch(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(x)}&owner=${encodeURIComponent(ownername)}&botname=${encodeURIComponent(botname)}`)
  const resp = await res.json()
  return resp.response;
}
module.exports.playstore = async function(app) {
  if(!app) throw new Error("The field 'appname' was left empty in the playstore function.")
  const res = await fetch(`https://api.popcat.xyz/playstore?q=${encodeURIComponent(app)}`)
  const json = await res.text()
  const obj = JSON.parse(json)
  return obj;
}
module.exports.joke = async function() {
  const res = await fetch("https://api.popcat.xyz/joke")
  const json = await res.json()
  return json.joke;
}
module.exports.encode = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the encode function. Need help? https://dsc.gg/popcatcom")
  const input = `text=${encodeURIComponent(text)}`
  const res = await fetch(`https://api.popcat.xyz/encode?${input}`)
  const json = await res.json()
  return json.binary;
}
module.exports.decode = async function(binary) {
  if(!text) throw new Error("The field 'binary' was left empty in the decode function. Need help? https://dsc.gg/popcatcom")
  const input = `binary=${encodeURIComponent(text)}`
   const res = await fetch(`https://api.popcat.xyz/decode?${input}`)
  const json = await res.json()
  return json.text;
}
module.exports.facts = async function(text) {
  if(!text) throw new Error("The field 'text' was left empty in the facts functuion.")
  const input = `text=${encodeURIComponent(text)}`
  const res = await request("facts", input)
  return res;
}
module.exports._8ball = async function() {
  const res = await fetch("https://api.popcat.xyz/8ball")
  const json = await res.json()
  return json.answer;
}
module.exports.pet = async function(image) {
  if(!image) throw new Error("The field 'image' was left empty in the pet function.")
  const input = `image=${encodeURIComponent(image)}`
  const res = await request("pet", input)
  return res;
}

