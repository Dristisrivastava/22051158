const { getNumbersFromAPI } = require("../services/numberService");

const windowSize = 10;
let windowQueue = [];

exports.fetchNumbers = async (req, res) => {
    const { type } = req.params;

    if (!["p", "f", "e", "r"].includes(type)) {
        return res.status(400).json({ error: "Invalid number type." });
    }

    const numbers = await getNumbersFromAPI(type);
    if (!numbers) return res.status(500).json({ error: "Failed to fetch numbers." });

    const prevWindow = [...windowQueue];

    // Add unique numbers and maintain window size
    numbers.forEach(num => {
        if (!windowQueue.includes(num)) {
            if (windowQueue.length >= windowSize) windowQueue.shift();
            windowQueue.push(num);
        }
    });

    const avg = windowQueue.length ? (windowQueue.reduce((sum, n) => sum + n, 0) / windowQueue.length).toFixed(2) : 0;

    res.json({
        windowPrevState: prevWindow,
        windowCurrState: windowQueue,
        numbers,
        avg: parseFloat(avg)
    });
};