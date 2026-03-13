const Redis = require('ioredis');
const config = require('./config');

function createRedisClient() {
  const client = new Redis(config.REDIS_URL);

  client.on('connect', () => {
    console.log('Redis connected successfully');
  });

  client.on('error', (error) => {
    console.error('Redis connection error:', error.message);
  });

  return client;
}

module.exports = { createRedisClient };
