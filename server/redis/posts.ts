import { redisClient } from './index';
import { getPostViewKey } from './keys';

export const incrementPostView = async (postId: number) => {
    if (!redisClient) {
        console.warn('Redis is disabled, skipping increment');
        return 0;
    }

    const key = getPostViewKey(postId);
    try {
        const updatedCount = await redisClient.incr(key);
        return updatedCount;
    } catch (err: unknown) {
        console.error(`Error incrementing views for post ${postId}:`, err);
        throw err;
    }
};

export const getPostViewCount = async (postId: number) => {
    if (!redisClient) {
        console.warn('Redis is disabled, skipping increment');
        return 0;
    }

    const key = getPostViewKey(postId);
    try {
        const views = await redisClient.get(key);
        return views ? parseInt(views, 10) : 0;
    } catch (error) {
        console.error(`Error getting views for post ${postId}:`, error);
        throw error;
    }
};
