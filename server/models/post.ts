import {
    type CreationOptional,
    type InferAttributes,
    type InferCreationAttributes,
    DataTypes,
    Model,
} from 'sequelize';

import { sequelize } from '../util/db';

export default class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    declare id: CreationOptional<number>;
    declare userId: string;
    declare content: string;
    declare image: CreationOptional<string>;
    declare likes: number;
    declare comments: number;
    declare reposts: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
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
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        underscored: true,
        timestamps: true,
        tableName: 'posts',
    }
);
