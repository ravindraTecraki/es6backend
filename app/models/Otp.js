import { DataTypes } from 'sequelize';
import sequelize from "../../config/sequelize.js"

const Otp = sequelize.define('Otp', {
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  generated_otp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otp_expiration: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get() {
      // Sequelize automatically handles the conversion of dates
      return this.getDataValue('otp_expiration');
    },
    set(otp_expiration) {
      // Sequelize automatically handles the conversion of dates
      this.setDataValue('otp_expiration', otp_expiration);
    },
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'otps', 
  timestamps: true, 
  createdAt: 'created_at', 
  updatedAt: 'updated_at', 
  hooks: {
    // Hook to set otp_expiration based on the current time and a predefined expiration duration
    beforeCreate: (otp, options) => {
      const expirationDurationMinutes = 10; 
      const expirationDate = new Date();
      expirationDate.setMinutes(expirationDate.getMinutes() + expirationDurationMinutes);
      otp.otp_expiration = expirationDate;
    },
  },
});

export default Otp;
