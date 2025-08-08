

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://insanexpan:Yanis0673654171@discordbot.qyb04p1.mongodb.net/?retryWrites=true&w=majority&appName=Discordbot",
  spotifyClientId : "85aab1d51a174aad9eed6d7989f530e6",
  spotifyClientSecret : "b2ad05aa725e434c88776a1be8eab6c2",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Spotify", 
  activityType: "Listening",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
{
      name: "Main Node",
      password: "youshallnotpass",
      host: "lavalink.jirayu.net",
      port:  13592,
      secure: false
    }
  ]
}
