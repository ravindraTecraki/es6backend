import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

class userController {
    // Function for user registration details
    static async registration(req, res) {
        // Validation
        const { name, email, password, city, state, pincode, website } = req.body;

        // Example validation using if statements
        if (!name || !email || !password || !city || !state || !pincode || !website) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        try {
            // Check if user with the same email already exists
            let existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }

            // Create new user
            const newUser = await User.create({
                name,
                email,
                password,
                city,
                state,
                pincode,
                website
            });

            return res.status(201).json({ message: 'Registered successfully', user_id: newUser.id });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Function for login of the hospital
    static async login(req, res) {
        const { email, password } = req.body;

        try {
            if (!email || !password) 
                return res.status(400).json({ Status: false, error: 'Email and password are required' });

            // Find user by email
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ Status: false, error: 'Email is not registered' });
            }

            // Check password
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ Status: false, error: 'Invalid credentials' });
            }

            // Generate JWT token for authentication
            const token = jwt.sign({ userId: user.id, userType: user.userType }, 'jwt_secret_key', { expiresIn: '1d' });

            // Return the success response with JWT token
            return res.status(200).json({ Status: true, msg: 'Login successful', user, token});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ Status: false, error: 'Error during login', status: 'Query Error' });
        }
    }
}

export default userController;
