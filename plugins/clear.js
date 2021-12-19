/* Codded by @isuwabrooo

Telegram: t.me/isuwabrooo
Facebook: https://www.facebook.com/isuwa.brooo.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - isuwabrooo
*/
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const QueenSew = require('../events');
const Isuru = require('../config');
const Pach = require('sewqueen-rs');

var CLR_DESC = ''
if (Isuru.LANG == 'SI') CLR_DESC = 'චැට් වල සියලු මැසේජ් ඉවත් කරයි.'
if (Isuru.LANG == 'EN') CLR_DESC = 'Clears all the messages from the chat.'
 if (Isuru.PSW !== 'isuwa') {

QueenSew.newcmdaddtosew({pattern: 'clear ?(.*)', fromMe: true, desc: CLR_DESC, usage: '.clear // .clear 94718281xxx // .clear 94718281xxx-12345678@g.us'}, (async (message, match) => {
    if (message.reply_message) {
        var client_id = message.reply_message.data.participant
        var payload = await Pach.clear(Isuru.LANG, message.client.user.jid)
        await message.client.sendMessage(client_id, payload.Action, MessageType.text);
        await message.client.modifyChat(client_id, ChatModification.delete);
        await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
    } else {
        if (match[1] == '') {
            var client_id = message.jid
            var payload = await Pach.clear(Isuru.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        } else if (match[1] !== '') {
            let if_group = message.jid.includes('-') ? '' : '@s.whatsapp.net'
            var client_id = match[1] + if_group
            var payload = await Pach.clear(Isuru.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        }
    }
}));
}