/* Codded by @isuwabrooo

Telegram: t.me/isuwabrooo
Facebook: https://www.facebook.com/isuwa.brooo.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - isuwabrooo
*/

const SewIsu = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const des = "You Can Png From Any Emoji"
const iii = "Only work with emoji\n ඉමොජි පමණක් එවන්න"
 if (Config.PSW !== 'isuwa') {
if (Config.WORKTYPE == 'private') {

    SewIsu.newcmdaddtosew({pattern: 'png ?(.*)', fromMe: true, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CPK})

    }));
}
else if (Config.WORKTYPE == 'public') {

    SewIsu.newcmdaddtosew({pattern: 'png ?(.*)', fromMe: false, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CPK})

    }));


    SewIsu.newcmdaddtosew({pattern: 'png ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CPK})

    }));
}
}