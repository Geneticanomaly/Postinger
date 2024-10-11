import User from './user';
import Post from './post';
import Comment from './comment';
import Like from './like';
import Bookmark from './bookmark';
import Repost from './repost';
import Follow from './follower';
import Notification from './notification';
import Chat from './chat';
import Message from './message';

/* Post Relationships */
User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

/* Comment Relationships */
User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
Comment.belongsTo(Post, { foreignKey: 'postId', onDelete: 'CASCADE' });

/* Chat Relationships */
User.hasMany(Chat, { as: 'InitiatedChats', foreignKey: 'userId1', onDelete: 'CASCADE' });
User.hasMany(Chat, { as: 'ReceivedChats', foreignKey: 'userId2', onDelete: 'CASCADE' });
Chat.belongsTo(User, { as: 'User1', foreignKey: 'userId1' });
Chat.belongsTo(User, { as: 'User2', foreignKey: 'userId2' });

/* Message Relationships */
Chat.hasMany(Message, { foreignKey: 'chatId', onDelete: 'CASCADE' });
Message.belongsTo(Chat, { foreignKey: 'chatId' });
User.hasMany(Message, { foreignKey: 'senderId', onDelete: 'CASCADE' });
Message.belongsTo(User, { foreignKey: 'senderId' });

/* Like Relationships */
User.belongsToMany(Post, { through: Like, foreignKey: 'userId' });
Post.belongsToMany(User, { through: Like, foreignKey: 'postId' });

/* Bookmark Relationships */
User.belongsToMany(Post, { through: Bookmark, foreignKey: 'userId' });
Post.belongsToMany(User, { through: Bookmark, foreignKey: 'postId' });

/* Repost Relationships */
User.belongsToMany(Post, { through: Repost, foreignKey: 'userId' });
Post.belongsToMany(User, { through: Repost, foreignKey: 'postId' });

/* Follow Relationships */
// User can follow many other users
User.belongsToMany(User, {
    as: 'Following',
    through: Follow,
    foreignKey: 'followerId',
    otherKey: 'followingId',
});
// User can be followed by many other users
User.belongsToMany(User, {
    as: 'Followers',
    through: Follow,
    foreignKey: 'followingId',
    otherKey: 'followerId',
});

/* Notification Relationships */
User.hasMany(Notification, { foreignKey: 'userId', as: 'notifications' });
User.hasMany(Notification, { foreignKey: 'fromId', as: 'sentNotifications' });
Notification.belongsTo(User, { foreignKey: 'userId', as: 'recipient' });
Notification.belongsTo(User, { foreignKey: 'fromId', as: 'sender' });

// Scope association association to likes
Notification.belongsTo(Like, {
    foreignKey: 'resourceId',
    constraints: false,
    scope: {
        type: 'like',
    },
});

// Scope association association to comments
Notification.belongsTo(Comment, {
    foreignKey: 'resourceId',
    constraints: false,
    scope: {
        type: 'comment',
    },
});

// Scope association association to follows
Notification.belongsTo(Follow, {
    foreignKey: 'resourceId',
    constraints: false,
    scope: {
        type: 'follow',
    },
});

export default { User, Post, Comment, Like, Bookmark, Repost, Follow, Notification };
