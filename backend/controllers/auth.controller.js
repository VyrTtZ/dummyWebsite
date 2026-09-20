import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  console.log("test");
  const { email, password } = req.body;

  const SECRET_KEY = "supersecretkey"; //here for testing, later should be in env variable

  //connection testing for now, later should check against database
  if (email === "test@test.com" && password === "123456") {
    
    const token = jwt.sign(
      { email: email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
        console.log("Login successful, token generated:", token);
        res.setHeader('Content-Type', 'application/json')
    return res.json({ token });

  }

  res.status(401).json({ message: "Invalid credentials" });
};

