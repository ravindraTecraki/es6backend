import { DataTypes } from 'sequelize';
import  sequelize  from '../../config/sequelize.js'

const Contact = sequelize.define('Contact',{
    name: {
        type:DataTypes.STRING,
        allowNull: true
      },
      email:{
    
        type:DataTypes.STRING,
        allowNull: true
      },
      subject:{
        type:DataTypes.STRING,
        allowNull: false,
      
    
      },
      message:{
    
        type:DataTypes.STRING,
        allowNull: false
      }
    },
      {
        tableName: 'contacts', // the table name explicitly
        timestamps: true, //  timestamps
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
   });
   export default Contact;

    

