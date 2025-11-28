// Temporary in-memory user storage
const users = {}; 
// Structure: { username: { username, password } }

export const createUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Username and password required" });

  if (users[username])
    return res.status(409).json({ message: "User already exists" });

  // Save user in memory
  users[username] = { username, password };

  console.log("Users:", users); // debug
  return res.status(201).json({ message: "User created" });
};

export const loginUser = (req, res) => {
  const { username, password } = req.body;

  const user = users[username];

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  return res.status(200).json({ message: "Login successful" });
};
