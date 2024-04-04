// Modified by VanDisBot

const client = require("../index");
const Discord = require(`discord.js`);
const chalk = require('chalk');
const simplydjs = require("simply-djs");

let statuses = [
  "Subscribe to VanDisBot",
]
let e = statuses.length

function status() {
  i = Math.floor(Math.random() * (e))
  client.user.setActivity(statuses[i],
    {
      type: "WATCHING",
    });
}

client.on("ready", async () => {
  simplydjs.connect(process.env.MONGO)

  setInterval(status, 3000)

  console.clear()
  console.log(chalk.bgBlack(chalk.greenBright(`═════════════════════════════════════════════`)));
  console.log(chalk.magenta(`
  Developed by ItzVandine
  `))
  console.log(chalk.bgBlack(chalk.magentaBright(`═════════════════════════════════════════════`)));
  console.log(chalk.yellowBright("VanDisBot | Online And Fully Functional"))
  console.log(chalk.bgBlack(chalk.yellowBright(`═════════════════════════════════════════════`)))

  console.log(chalk.cyanBright(`VanDisBot | Node: ${process.version}
  VanDisBot | Discord.js: ${Discord.version}
  VanDisBot | Connected as: ${client.user.username}
  VanDisBot | ID: ${client.user.id}
  VanDisBot | Owner: ItzVandine`));
  console.log(chalk.bgBlack(chalk.cyanBright(`═════════════════════════════════════════════`)))
  console.log(chalk.red(`VanDisBot | Currently watching ${client.guilds.cache.size} Servers`));
  console.log(chalk.bgBlack(chalk.red(`═════════════════════════════════════════════`)));
})

// loading database
require('../handlers/Database')(client)

client.guilds.cache.forEach(async (guild) => {
  await client.updateembed(client, guild)
});