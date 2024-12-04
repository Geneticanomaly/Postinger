import User from './user';
import Post from './post';
import Like from './like';
import Bookmark from './bookmark';
import Repost from './repost';
import Follow from './follower';
import Notification from './notification';
import Chat from './chat';
import Message from './message';
import File from './file';

/* Post Relationships */
User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

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

// Scope association association to follows
Notification.belongsTo(Follow, {
    foreignKey: 'resourceId',
    constraints: false,
    scope: {
        type: 'follow',
    },
});

/* User and File Relationships */
User.hasOne(File, {
    as: 'profileImage',
    foreignKey: 'userId',
    scope: { fileType: 'profileImage' },
});
File.belongsTo(User, { foreignKey: 'userId', as: 'profileImage' });

User.hasOne(File, {
    as: 'backgroundImage',
    foreignKey: 'userId',
    scope: { fileType: 'backgroundImage' },
});
File.belongsTo(User, { foreignKey: 'userId', as: 'backgroundImage' });

/* Post and File Relationships */
Post.hasMany(File, {
    foreignKey: 'postId',
    as: 'media',
    // scope: { fileType: 'postMedia' },
    onDelete: 'CASCADE',
});
File.belongsTo(Post, { foreignKey: 'postId', as: 'media', onDelete: 'CASCADE' });

/* Message and File Relationships */
Message.hasMany(File, { foreignKey: 'messageId', onDelete: 'CASCADE' });
File.belongsTo(Message, { foreignKey: 'messageId', onDelete: 'CASCADE' });

export default { User, Post, Like, Bookmark, Repost, Follow, Notification, File };
