import {
    type CreationOptional,
    type InferAttributes,
    type InferCreationAttributes,
    DataTypes,
    Model,
} from 'sequelize';

import { sequelize } from '../../util/db';

export default class Follow extends Model<InferAttributes<Follow>, InferCreationAttributes<Follow>> {
    declare id: CreationOptional<number>;
    declare followerId: string;
    declare followingId: string;
}

Follow.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        followerId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        followingId: {
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
        modelName: 'follow',
        tableName: 'follows',
        indexes: [
            {
                unique: true,
                fields: ['followerId', 'followingId'],
            },
        ],
    }
);
