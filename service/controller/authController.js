let users = [];
let sessions = {};

exports.register = (req, res) => {
  const { email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: "Email already registered" });
  }

  users.push({ email, password });
  res.json({ message: "Registered successfully" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = Math.random().toString(36).slice(2);
  sessions[token] = email;

  res.json({ message: "Logged in", token });
};

exports.logout = (req, res) => {
  const token = req.headers.authorization;
  delete sessions[token];

  res.json({ message: "Logged out" });
};

exports.restricted = (req, res) => {
  const token = req.headers.authorization;

  if (!token || !sessions[token]) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  res.json({
    message: "Restricted data accessed",
    user: sessions[token]
  });
};
