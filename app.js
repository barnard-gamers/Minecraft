const ScriptServer = require('scriptserver');

const server = new ScriptServer({
  core: {
    jar: 'server.jar',
    args: ['-Xmx1024M'],
    rcon: {
      port: '25575',
      password: 'aMUuENdQmQj6Z0wRgxUQ'
    }
  },
  essentials: {
    motd: {
      enabled: true,
      first: 'Welcome to the Barnard, ${player}!',
      text: 'Welcome back ${player}!'
    },
    starterKit: {
      enabled: true,
      items: [
        'iron_pickaxe',
        'iron_shovel',
        'iron_axe',
        'iron_sword',
        'bed',
        'bread 32',
      ]
    },
    home: {
      enabled: true,
      amount: 3
    },
    spawn: true,
    warp: {
      enabled: true,
      opOnly: true
    },
    tpa: true,
    back: true,
    day: {
      enabled: true,
      percent: 50
    },
    night: {
      enabled: true,
      percent: 50
    },
    weather: {
      enabled: true,
      percent: 50
    }
  }
});

async function bootServer () {
  await server.use(require('scriptserver-event'));
  await server.start();
}

bootServer();
