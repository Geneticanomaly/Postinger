import { createClient, RedisClientType } from 'redis';
import { REDIS_URL } from '../util/config';

export let redisClient: RedisClientType | null = null;
let redisEnabled = false;

// Initialize Redis client
if (!REDIS_URL) {
    console.warn('No REDIS_URL set, Redis is disabled');
} else {
    redisClient = createClient({
        url: REDIS_URL,
    });

    redisClient.on('error', (err: Error) => {
        console.error('Redis Client Error:', err);
    });

    redisClient.on('connect', () => {
        console.log('Connected to Redis');
        redisEnabled = true;
    });

    // Connect to Redis
    redisClient.connect().catch((err: Error) => {
        console.error('Failed to connect to Redis:', err);
    });
}

export async function disconnectRedis(): Promise<void> {
    if (redisEnabled && redisClient) {
        await redisClient.quit();
        console.log('Redis connection closed');
    }
}
