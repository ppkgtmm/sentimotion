import fs from 'fs';
import messages from './tw-general-msg.json';

const message = messages.message;

const cleaned = { message: [] }
for (const msg of message) {
    if (!msg || !msg.body || !msg.created || msg.body.trim().length === 0) continue;
    cleaned.message.push({
        body: msg.body.split("\n").join(" "),
        created: msg.created,
        space_id: msg.space_id,
        message_id: msg.message_id,
    })
}

fs.writeFile('./cleaned-msg.json', JSON.stringify(cleaned), (err) => {
    if (err) throw err
    console.log('written');
})

