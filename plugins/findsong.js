/* Codded by @isuwabrooo

Telegram: t.me/isuwabrooo
Facebook: https://www.facebook.com/isuwa.brooo.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - isuwabrooo
*/

const QueenSew = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const ffmpeg = require('fluent-ffmpeg');

QueenSew.newcmdaddtosew({pattern: 'find', fromMe: false, desc: 'song find plugin By t.me/isuwabrooo'}, (async (message, match) => {
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, 'replay to a audio!', MessageType.text);
    var filePath = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    var form = new FormData();
    ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {
        form.append('api_token', '2bd1fcb3ccd15607f72cdbb527907ce6');
        form.append('file', fs.createReadStream('./music.mp3'));
        form.append('return', 'apple_music, spotify');
        var configs = {
            headers: {
                ...form.getHeaders()
            }
        }
        await axios.post('https://api.audd.io/', form, configs).then(async (response) => {
            var res = response.data
            if (res === 'success') {
                await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);
            } else {
                await message.client.sendMessage(message.jid, 'No results found', MessageType.text);
            }
        }).catch((error) =>  {
            console.log(error);
        });
    });

}));
