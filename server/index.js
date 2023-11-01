const express = require("express");
const cors = require("cors"); // Import the cors middleware

const app = express();
app.use(express.json());

app.use(cors());

const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://Awesome12:Awesome123@cluster0.9tdgbtc.mongodb.net/";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, 
    tlsInsecure: true, 
  })
  
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.listen(5000, () => {
  console.log("Server started");
});

// app.post("/post", async (req, res) => {
//   console.log(req.body);
//   const { data } = req.body;
//   try {
//     if (data == "adarsh") {
//       res.send({ status: "ok" });
//     } else {
//       res.send({ status: "User Not found" });
//     }
//   } catch (error) {
//     res.send({ status: "Something went wrong try again" });
//   }
// });

require("./userDetail");
const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
    const { fname, lname, email, password, userType } = req.body;
  
    // const encryptedPassword = await bcrypt.hash(password, 10);
    try {
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.json({ error: "User Exists" });
      }
      await User.create({
        fname,
        lname,
        email,
        password,
        userType,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });
  // app.post("/login-user", async (req, res) => {
  //   const { email, password } = req.body;
  
  //   try {
  //     const user = await User.findOne({ email });  
  //     if (!user) {
  //       return res.json({ error: "User Not found" });
  //     }
  //     if (password === user.password) {
  //       // const token = generateToken(user);
  //       return res.json("Sucess");
  //     } else {
  //       return res.json({ error: "Invalid Password" });
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     return res.json({ error: "Error during login" });
  //   }
  // });
  app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.json({ error: "User Not found" });
      }
  
      if (password === user.password) {
        // Passwords match, user is authenticated
        // You can add a "token" field here if needed
        return res.json({ status: "ok" });
      } else {
        // Passwords do not match
        return res.json({ error: "Invalid Password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res.json({ error: "Error during login" });
    }
  });
  
