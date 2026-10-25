const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const app = express();
const port = process.env.PORT || 3000;

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        executablePath: '/usr/bin/chromium',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] 
    }
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

app.get('/', (req, res) => {
    res.send('Lucas Bot is running!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
