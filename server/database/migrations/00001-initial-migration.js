const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.createTable('users', {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            residence: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            avatar_url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            background_url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            disabled: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        });
        await queryInterface.createTable('posts', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            likes: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            comments: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            reposts: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        });
        await queryInterface.createTable('comments', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            post_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'posts',
                    key: 'id',
                },
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            content: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        });
        await queryInterface.createTable('likes', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            post_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'posts',
                    key: 'id',
                },
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
        });
        await queryInterface.createTable('bookmarks', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            post_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'posts',
                    key: 'id',
                },
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
        });
        await queryInterface.createTable('reposts', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            post_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'posts',
                    key: 'id',
                },
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
        });
        await queryInterface.createTable('follows', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            follower_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            following_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
        });
        await queryInterface.createTable('notifications', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            from_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            type: {
                type: DataTypes.ENUM('like', 'comment', 'follow'),
                allowNull: false,
            },
            resource_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            is_read: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        });
        await queryInterface.createTable('chats', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id1: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            user_id2: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        });
        await queryInterface.createTable('messages', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            chat_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'chats',
                    key: 'id',
                },
            },
            sender_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            message: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_read: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        });
    },
    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('users');
        await queryInterface.dropTable('posts');
        await queryInterface.dropTable('comments');
        await queryInterface.dropTable('likes');
        await queryInterface.dropTable('bookmarks');
        await queryInterface.dropTable('reposts');
        await queryInterface.dropTable('follows');
        await queryInterface.dropTable('notifications');
        await queryInterface.dropTable('chats');
        await queryInterface.dropTable('messages');
    },
};
