const botId = process.env.NODE_ENV === "production" ? "GroupLunchBot" : "DevGroupLunchBot",
    apiURL = "https://api-dot-grouplunch.appspot.com";
export {
    botId,
    apiURL,
}