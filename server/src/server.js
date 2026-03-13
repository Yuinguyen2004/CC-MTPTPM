const http = require('http');
const config = require('./shared/config/config');
const { connectDB } = require('./shared/config/database');
const { createRedisClient } = require('./shared/config/redis');
const { createApp } = require('./app');

async function start() {
  await connectDB();

  const cache = createRedisClient();
  const sharedServices = { cache, socket: null };

  const app = createApp(sharedServices);
  const server = http.createServer(app);

  server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
}

start();
