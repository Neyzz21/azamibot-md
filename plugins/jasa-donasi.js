let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA / OVO / DANA :
├ • *085875063235*
│
├ SAWERIA
├ -
│
├ Ownerku
├ _wa.me/6285875063235_
│
╰───「 ${packname} 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
