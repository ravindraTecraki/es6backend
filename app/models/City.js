import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import State from "./State.js";

const City = sequelize.define('City',{

    city_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: State,
            key: 'id'
        }
    }
}, {
    tableName: 'city', // Specify the table name explicitly
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the created_at column name
    updatedAt: 'updated_at' // Customize the updated_at column name
});


// Defining the association
City.belongsTo(State, { foreignKey: 'state_id' });


export default City;
