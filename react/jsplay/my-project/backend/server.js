const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');  // Fix the import here
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')


const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
const { databaseconnection } = require('./db'); 
const {customermodel } = require('./customermodel')

dotenv.config();
const port = process.env.PORT;  // Correct the variable name to PORT

databaseconnection()

//registration

app.post('/a/reg',async(req,res)=>{
    const{username,password,email}= req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const customer = customermodel({username,password:hashedPassword,email})

    const Email = await customermodel.findOne({email})

    if(Email){
        return res.status(401).json({message:'email already exist'})
    }
    
    try {
        await customer.save()
        res.json({message:'user registered successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'failed'})
    }

})


//login

// login
app.post('/a/log', async (req, res) => {
    const { email, password } = req.body;
    const Email = await customermodel.findOne({ email });

    if (!Email) {
        return res.status(401).json({ message: 'Email not found' });
    }

    const Password = await bcrypt.compare(password, Email.password); // Use Email instead of customer

    if (!Password) {
        return res.status(401).json({ message: 'Incorrect Password' });
    }

    const token = jwt.sign(
        { username: Email.username }, // Use Email instead of customer
        process.env.SECRET_KEY,
        { expiresIn: "1hr" }
    );

    res.json({ token });
});

app.post('/a/forgot', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        // Find the user based on the provided email
        const user = await customermodel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a new hashed password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password with the new hashed password
        user.password = hashedPassword;
        await user.save();

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to reset password' });
    }
});




app.listen(port, () => {
    console.log(`Server connected to ${port}`);
});
