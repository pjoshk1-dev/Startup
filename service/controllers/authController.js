exports.login = (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Username and password are required.'
    });
  }

  // TEMPORARY CLASS-ASSIGNMENT "FAKE USER DB"
  // Replace with real DB later if needed
  const storedUser = {
    username: 'test',
    password: '1234'
  };

  // Check credentials
  if (username !== storedUser.username || password !== storedUser.password) {
    return res.status(401).json({
      success: false,
      message: 'Invalid username or password.'
    });
  }

  // If valid, send success
  return res.json({
    success: true,
    message: 'Login successful!',
    user: { username }
  });
};
