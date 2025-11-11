import { createClient, RedisClientType } from 'redis';

const redisClient: RedisClientType = createClient({
  username: process.env.REDIS_CLIENT_USERNAME,
  password: process.env.REDIS_CLIENT_PASSWORD,
  socket: {
    host: process.env.REDIS_CLIENT_HOST,
    port: parseInt(process.env.REDIS_CLIENT_PORT!),
  },
});

redisClient.on('connect', () => console.log('Redis Connected'));
redisClient.on('error', (err) => console.log('Redis Error:', err));

await redisClient.connect();

export default redisClient;
