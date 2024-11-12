import { DataTypes, Model, CreationOptional } from 'sequelize';
import { sequelize } from '../../util/db';

export default class File extends Model {
    declare id: CreationOptional<number>;
    declare userId: CreationOptional<string>;
    declare postId: CreationOptional<number>;
    declare messageId: CreationOptional<number>;
    declare name: string;
    declare encoding: string;
    declare mimetype: string;
    declare buffer: Buffer;
    declare fileType: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

File.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'posts',
                key: 'id',
            },
        },
        messageId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'messages',
                key: 'id',
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        encoding: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mimetype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        buffer: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
        },
        fileType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        underscored: true,
        timestamps: true,
        modelName: 'file',
        tableName: 'files',
    }
);
