const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
// Binance API Key (replace with your own key)
const API_KEY = '<your_binance_api_key>';
// Dummy endpoint for fetching cryptocurrency prices
app.get('/get-crypto-prices', async (req, res) => {
    try {
        const response = await fetch('https://rapidapi.p.rapidapi.com/api/v3/ticker/price', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'binance1.p.rapidapi.com',
                'X-RapidAPI-Key': API_KEY,
            },
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});