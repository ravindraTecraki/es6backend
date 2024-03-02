import  express  from "express";
import bodyParser from "body-parser";
import userRoutes from "./app/routes/userRoutes.js";
import hospitalRoutes from "./app/routes/hospitalRoutes.js"
import stateRoutes from "./app/routes/stateRoutes.js";
import cityRoutes from "./app/routes/cityRoutes.js";
import patientRoutes from "./app/routes/patientRoutes.js";
import contactRoutes from  "./app/routes/contactRoutes.js";
import attendantRoutes from "./app/routes/attendantRoutes.js";
import doctorRoutes from  "./app/routes/doctorRoutes.js";
import formRoutes from "./app/routes/formRoutes.js";
import otpRoutes from "./app/routes/otpRoutes.js";
import Hospital from "./app/models/Hospital.js";
import Doctor from "./app/models/Doctor.js";
import sequelize from "./config/sequelize.js";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use((cors()));

// Connect to PostgreSQL
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  });

// console.log(sequelize);


// relationships

Doctor.belongsToMany(Hospital, {
  through: 'doctors_hospitals', // Intermediate join table name
 foreignKey: 'doctor_id', // Foreign key in the intermediate table referring to Doctor
 otherKey: 'hospital_id' // Foreign key in the intermediate table referring to Hospital
});

Hospital.belongsToMany(Doctor,
{ through: 'doctors_hospitals',
 foreignKey: 'hospital_id',
  otherKey: 'doctor_id' 
 }); // Many-to-many relationship with Doctor

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//insert tables using schema defined in models
// const populateTables = () => {
//   sequelize.sync({ force: true }).then(() => {
//       console.log('tables populated!')
//   }).catch((e) => {
//     console.log('tables not populated',e)
//   });
//   };
// populateTables();

app.get('/', (req, res) => {
  res.send('Hello World 123 Tecraki!');
});

app.use(express.json());
app.use("/api/user/", userRoutes);
app.use("/api/hospital/", hospitalRoutes);
app.use("/api/states/", stateRoutes);
app.use("/api/city/", cityRoutes);
app.use("/api/patient/", patientRoutes);
app.use("/api/contact/", contactRoutes);
app.use("/api/attendant/", attendantRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/form", formRoutes);
app.use("/api/otp", otpRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
