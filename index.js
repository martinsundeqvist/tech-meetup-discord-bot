const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
    ]
});

client.once('ready', () => {
    console.log('Ready!');
    client.user.setPresence({ activities: [{ name: 'Discord' }], status: 'idle' });
});


// Set the event listener for a new guild member
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.get('welcome'); // <-- Replace with your channel's ID

    // Do nothing if the channel wasn't found on this server or if the channel is not a text channel
    if (!channel || channel.type !== 'GUILD_TEXT') return;

    // Send the message, mentioning the member
    channel.send(`Welcome ${member}! Please check the rules channel and enjoy your stay!`);
});

// Login to Discord with your app's token
client.login(process.env.DISCORD_BOT_TOKEN);

