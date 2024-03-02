import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Form =  sequelize.define('Form', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    version: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    tableName: 'forms', // the table name explicitly
    timestamps: true, // timestamps
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Form;
