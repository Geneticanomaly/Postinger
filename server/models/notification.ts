import {
    type CreationOptional,
    type InferAttributes,
    type InferCreationAttributes,
    DataTypes,
    Model,
} from 'sequelize';

import { sequelize } from '../util/db';

export default class Notification extends Model<
    InferAttributes<Notification>,
    InferCreationAttributes<Notification>
> {
    declare id: CreationOptional<number>;
    declare userId: string;
    declare fromId: string;
    declare type: 'like' | 'comment' | 'follow';
    declare resourceId: CreationOptional<number>;
    declare isRead: CreationOptional<boolean>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Notification.init(
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
        fromId: {
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
        resourceId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isRead: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        underscored: true,
        timestamps: true,
        tableName: 'notifications',
    }
);
