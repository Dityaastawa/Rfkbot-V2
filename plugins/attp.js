let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
conn.sendFile(m.chat, global.API('3a4e971ad95b8af6ff0aa533', '/attp', { file: '', text: teks }), 'attp.webp', '', m, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

module.exports = handler
