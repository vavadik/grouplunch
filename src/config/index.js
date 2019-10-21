const botId = process.env.NODE_ENV === "production" ? "GroupLunchBot" : "DevGroupLunchBot",
    // apiURL = "https://api-dot-grouplunch.appspot.com",
    apiURL = "http://localhost:3000",
    botToken = process.env.NODE_ENV === "production" ? "985268400:AAHP8BNRza6oi0qGxVs5_h-qZ5P5V4KQneY" : "978810987:AAED5BC0Qchm73TBeiD0a6BCmIrD7OAAs3k";

export {
    botId,
    apiURL,
    botToken,
}