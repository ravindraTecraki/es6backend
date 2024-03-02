import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';
//import Hospital from './Hospital.js'; 

const Doctor = sequelize.define('Doctor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    speciality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phonenumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'doctors', // the table name explicitly
    timestamps: true, // timestamps
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Many-to-many relationship with Hospital
// Doctor.belongsToMany(Hospital, {
//     through: 'DoctorHospital', // Intermediate join table name
//     foreignKey: 'doctor_id', // Foreign key in the intermediate table referring to Doctor
//     otherKey: 'hospital_id' // Foreign key in the intermediate table referring to Hospital
// });

export default Doctor;
