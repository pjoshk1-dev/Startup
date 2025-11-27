let fakeUsers = [
  { id: 1, name: "Alice", email: "alice@test.com" },
  { id: 2, name: "Bob", email: "bob@test.com" }
];

exports.getUsers = (req, res) => {
  res.json(fakeUsers);
};

exports.createUser = (req, res) => {
  const newUser = { id: fakeUsers.length + 1, ...req.body };
  fakeUsers.push(newUser);
  res.status(201).json(newUser);
};
