import User from "./User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecretkey"; // Use environment variable in production

// REGISTER
export async function createAccount(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required." });
  }

  try {
    // Check for existing user
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(400).json({ message: "Username already taken." });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create new user in DB
    const user = new User({
      username,
      password: hashed,
      cards: []  // start with empty collection
    });

    await user.save();

    // Create JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({ 
      message: "Account created successfully.",
      token,
      username: user.username
    });

  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error." });
  }
}


// LOGIN
export async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    // JWT
    const token = jwt.sign(
  {
    userId: user._id.toString(),
    username: user.username
  },
  JWT_SECRET,
  { expiresIn: "1h" }
);


    res.json({
      message: "Login successful.",
      token,
      username: user.username
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error." });
  }
}


// LOGOUT (frontend simply deletes token)
export function logoutUser(req, res) {
  res.json({ message: "Logged out." });
}

export async function restricted(req, res) {
  try {
    // If you use auth middleware it should set req.userId
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized — please log in." });
    }

    const user = await User.findById(req.userId).select("username");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.json({
      message: "You have accessed a restricted endpoint!",
      user: user.username
    });
  } catch (err) {
    console.error("Restricted endpoint error:", err);
    return res.status(500).json({ message: "Server error." });
  }
}