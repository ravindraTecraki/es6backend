import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';
import User from './User.js';
//import Doctor from "./Doctor.js";

const Hospital = sequelize.define('Hospital', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    logoContentType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone_primary: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_secondary: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pincode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    website: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'cascade'
    }
}, {
    tableName: 'hospitals', 
    timestamps: true, 
    underscored: true, 
});

//Create the table in the database
(async () => {
  await sequelize.sync(); 
  // await sequelize.sync({ force: true }); // Set force: true to recreate the table on each application start
  console.log('Table synced successfully');
})();

Hospital.belongsTo(User, { foreignKey: 'user_id' }); // Define the user relationship
// Hospital.belongsToMany(Doctor,
//    { through: 'doctors_hospitals',
//     foreignKey: 'hospital_id',
//      otherKey: 'doctor_id' 
//     }); // Many-to-many relationship with Doctor

export default Hospital;
