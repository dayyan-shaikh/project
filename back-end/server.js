const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./db/dbconnection.js");
const User = require("./db/user.js");

// Middleware for parsing JSON
app.use(express.json());

// Registration route
app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);
        
        // Instantiate a new user object
        const newUser = new User({ username, password });
        await newUser.save();
        
        res.status(201).json({ message: "Registration Successful" });
    } catch (error) {
        console.error("Error during registration:", error); // Log the actual error
        res.status(500).json({ error: "Registration Failed" });
    }
});

// Login

app.post("/login",async (req,res) => {
    try {
        const {username,password} = req.body;
        const  user = await User.findOne({username})

        if(!user){
            return res.status(401).json({message:"Invalid username"})
        }
        if(user.password !== password){
            return res.status(401).json({message:"Invalid password"})
        }
        res.status(200).json({message:"Login successfull"})
    } catch (error) {
        res.status(500).json({message:"Login failed"})
        
    }
})

// Connect to the database
connectDB()

// Start the server
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
