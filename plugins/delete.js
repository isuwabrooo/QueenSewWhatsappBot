/* Codded by @isuwabrooo

Telegram: t.me/isuwabrooo
Facebook: https://www.facebook.com/isuwa.brooo.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - isuwabrooo

*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DEL_DESC = "Deletes The Replied Message Send By The Bot"

QueenSew.newcmdaddtosew({pattern: 'delete', fromMe: false, desc: DEL_DESC}, (async (message, match) => {

  await message.reply_message.delete();

}));
