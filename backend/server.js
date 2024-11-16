import express from 'express';  // Use import instead of require
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


// Define your MongoDB models
const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    itemID: String,
    pincode: String,
    deliveryDate: String,
    shippedDate: String,
    weight: Number,
    charge: Number,
    hiddenData: mongoose.Schema.Types.Mixed,
});

const AdminSchema = new mongoose.Schema({
    id: String,
    battery: Number,
    tasksCompleted: Number,
    currentWeight: Number,
    maxWeight: Number,
    hiddenData: mongoose.Schema.Types.Mixed,
});

const User = mongoose.model('User', UserSchema);
const Admin = mongoose.model('Admin', AdminSchema);

// API endpoints (GET requests)
app.get('/get-user', async (req, res) => {
    const { itemId, passCode } = req.query;

    try {
        const user = await User.findOne({ itemID: itemId, passCode });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found or invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
});

app.get('/get-admin', async (req, res) => {
    const { botId, passCode } = req.query;

    try {
        const admin = await Admin.findOne({ id: botId, passCode });
        if (admin) {
            res.json(admin);
        } else {
            res.status(404).json({ message: 'Admin not found or invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching admin' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
