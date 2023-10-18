#!/usr/bin/env python3
# This example requires the 'members' privileged intent to function.

import os
import discord


class MyClient(discord.Client):
    async def on_ready(self):
        print(f'Logged in as {self.user} (ID: {self.user.id})')
        print('------')

    async def on_member_join(self, member):
        guild = member.guild
        channel = discord.utils.get(guild.channels, name="welcome")
        if channel:
            to_send = f'Welcome {member.mention} to {guild.name}! Start out by getting aquainted with the #rules channel.'
            await channel.send(to_send)

intents = discord.Intents.default()
intents.members = True

client = MyClient(intents=intents)
client.run(os.getenv('BOT_TOKEN'))
~
~