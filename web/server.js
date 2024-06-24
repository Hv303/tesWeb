const express = require('express');
const { serverStatus } = require('growtopia-api');
const path = require('path');

const app = express();
const port = 3000;

// Endpoint untuk mengambil status server
app.get('/api/server-status', async (req, res) => {
    try {
        const status = await serverStatus();
        res.json(status);
    } catch (error) {
        console.error('Failed to fetch server status:', error);
        res.status(500).json({ error: 'Failed to fetch server status' });
    }
});

// Menyajikan file statis (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
