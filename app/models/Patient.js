import { DataTypes } from 'sequelize';
import  sequelize  from '../../config/sequelize.js';
import User from './User.js';
//import Doctor from './Doctor.mjs';

const Patient = sequelize.define('Patient', {
  patient_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  patient_age:{

    type:DataTypes.INTEGER,
    allowNull: true
  },
  patient_gender:{
    type:DataTypes.STRING,
    allowNull: false,

  },
  patient_phone:{

    type:DataTypes.STRING,
    allowNull: false
  },
  patient_address:{
    type:DataTypes.STRING,
    allowNull: false
  },

  patient_state:{
    type:DataTypes.INTEGER,
    allowNull: false,
    

  },
  patient_city:{
    type:DataTypes.INTEGER,
    allowNull: false,

  },
  patient_pincode:{
    type:DataTypes.INTEGER,
    allowNull: false

  },
  
  // user_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull: false,
  //   unique: true,
  //   references: {
  //     model: 'users',
  //     key: 'id'
  //   },
  //   onDelete: 'cascade'

  // }
 }, {
  tableName: 'patients', // Set the table name explicitly
  timestamps: true, // Add timestamps automatically
  underscored: true, // Use underscored naming convention for columns
});

//Patient.belongsTo(User, { foreignKey: 'user_id' }); // Define the user relationship
//Hospital.belongsToMany(Doctor, { through: 'doctors_hospitals', foreignKey: 'hospital_id', otherKey: 'doctor_id' }); // Define the many-to-many relationship with Doctor

export default Patient;
