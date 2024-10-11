import {
    type CreationOptional,
    type InferAttributes,
    type InferCreationAttributes,
    DataTypes,
    Model,
} from 'sequelize';

import { sequelize } from '../util/db';

export default class Repost extends Model<InferAttributes<Repost>, InferCreationAttributes<Repost>> {
    declare id: CreationOptional<number>;
    declare postId: number;
    declare userId: string;
}

Repost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'posts',
                key: 'id',
            },
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        tableName: 'reposts',
        indexes: [
            {
                unique: true,
                fields: ['postId', 'userId'],
            },
        ],
    }
);
