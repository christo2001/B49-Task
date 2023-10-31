import express from "express";
import { customermodel } from "../models/customermodel";

const router = express.Router();

router.post("/login", async(req,res)=>{})

router.post("/signup", async(req,res)=>{
  const { firstname, lastname, email, password } = req.body;
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new customermodel({ firstname, lastname, email, password: hashedPassword });

  try {
    await user.save();
    
    // Generate a token (you can keep this if needed for other purposes)
    const token = jwt.sign(
      { data: 'Token Data' },
      'SECRET_KEY',
      { expiresIn: '1h' }
    );
    
    // You can store the token in a variable or not, depending on your requirements
    // req.registrationToken = token;

    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while registering the user!" });
  }
})

export const userRouter = router