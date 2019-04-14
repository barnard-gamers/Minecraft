const ScriptServer = require('scriptserver');

const server = new ScriptServer({
  core: {
    jar: 'server.jar',
    args: ['-Xmx1024M'],
    rcon: {
      port: '25575',
      password: 'aMUuENdQmQj6Z0wRgxUQ'
    }
  }
});

async function bootServer () {
  await server.use(require('scriptserver-event'));
  await server.use(require('scriptserver-essentials'));
  await server.start();
}

bootServer();
