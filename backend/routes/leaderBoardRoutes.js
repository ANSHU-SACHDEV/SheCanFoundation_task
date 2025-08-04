// backend/routes/leaderboardRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        { rank: 1, name: "Aarav", code: "aarav2025", donations: 9500 },
        { rank: 2, name: "Ishika", code: "ishika2025", donations: 8500 },
        { rank: 3, name: "Rohan", code: "rohan2025", donations: 7800 },
        { rank: 4, name: "Simran", code: "simran2025", donations: 6200 },
        { rank: 5, name: "Ananya", code: "ananya2025", donations: 5000 },
    ]);
});

module.exports = router;
