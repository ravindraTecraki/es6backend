import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";



const State = sequelize.define("states", {
    state_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the created_at column name
    updatedAt: 'updated_at', // Customize the updated_at column name
  });


export default State;
