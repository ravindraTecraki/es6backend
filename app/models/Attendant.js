import { DataTypes } from 'sequelize';
import  sequelize  from '../../config/sequelize.js';
import Patient from "./Patient.js";

const Attendant = sequelize.define('Attendant',{

    name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    address:{
        type:DataTypes.STRING,
        allowNull: false,
    
      },
      occupation:{
    
        type:DataTypes.STRING,
        allowNull: false
      },
      telephone:{
        type:DataTypes.STRING,
        allowNull: true
    
      },
      relation_with_patient:{
        type:DataTypes.STRING,
        allowNull: false
    
    
      },
      signature:{
        type:DataTypes.STRING,
        allowNull: false
    
      }
    },
    {
        tableName: 'attendants', // the table name explicitly
        timestamps: true, //  timestamps
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
   });
    
Attendant.belongsTo(Patient, { foreignKey: 'patient_id' }); // patient and attendant relationship

export default Attendant;