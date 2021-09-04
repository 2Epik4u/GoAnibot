const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: true,
    testOnly: true, // Ensure you have test servers setup
    description: 'Ground your enemies', // Required for slash commands
    minArgs: 2,
    expectedArgs: '<User> <Time>',
    callback: ({ args }) => {
      // Destructure the name and age from the args array
      const [user, time] = args
  
      // The content to reply with must be returned from the callback function
      // This is required for slash commands exclusively
      return `OH OH OH OH OH OH OH  ${user} HOW DARE YOU BE BAD USER!!!!! THATS IT YOU ARE GROUNDED FOR ${time} years!.`
    }
  }