import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  rememberToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userType: {
    type: DataTypes.ENUM('doctor', 'hospital', 'patient'),
    allowNull: true
  }
}, {
  tableName: 'users', // Set the table name explicitly
  timestamps: true, // Add timestamps automatically
  underscored: true, // Use underscored naming convention for columns
});

// User.hasOne(Hospital, { foreignKey: 'user_id' }); // Define the user relationship


export default User;
