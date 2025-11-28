// ---- In-memory “database” ----
let users = [];        // { username, password }
let loggedInUser = null; // string username

// ---- CREATE ACCOUNT ----
export function createAccount(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required." });
  }

  const exists = users.find(u => u.username === username);
  if (exists) {
    return res.status(400).json({ message: "User already exists." });
  }

  users.push({ username, password });
  console.log("Users:", users);

  res.json({ message: "Account created successfully." });
}


// ---- LOGIN ----
export function loginUser(req, res) {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  loggedInUser = username;
  console.log("Logged in:", loggedInUser);

  res.json({ message: "Login successful.", username });
}


// ---- LOGOUT ----
export function logoutUser(req, res) {
  loggedInUser = null;
  res.json({ message: "Logged out." });
}


// ---- RESTRICTED ENDPOINT ----
export function restricted(req, res) {
  if (!loggedInUser) {
    return res.status(401).json({ message: "Unauthorized — please log in." });
  }

  res.json({
    message: "You have accessed a restricted endpoint!",
    user: loggedInUser
  });
}
