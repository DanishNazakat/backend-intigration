// const mongoose=require("mongoose");
const User = require("../dbschema/schema");
const hashy = require("hashy");
async function home(req, res) {
    try {
        const { Fname, Lname, Email, password } = req.body;
        hashy.hash(password, function (err, hash) {
            if (err) {
                return console.log(err);
            }
            console.log("generated password ", hash);
            const newUser = new User({ Fname, Lname, Email, password: hash });
            newUser.save();
            console.log(newUser);
            res.send({
                newUser,
                status: 200,
                message: "User added successfully",
            });
            console.log(Fname)

        })
        // res.send("HELLO WORLD")

    } catch (err) {
        res.send("ERROR")
        console.log(err)

    }
}
async function login(req, res) {
  try {
    const { Email, password } = req.body;

    if (!Email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    const user = await User.findOne({ Email });

    // ❌ user not found
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    hashy.verify(password, user.password, function (error, success) {
      if (error) {
        return res.status(500).json({
          message: "Password verification failed"
        });
      }

      if (success) {
        // ✅ frontend friendly response
        return res.status(200).json({
          status: 200,
          message: "Login successful",
          user: {
            id: user._id,
            Fname: user.Fname,
            Lname: user.Lname,
            Email: user.Email
          }
        });
      } else {
        return res.status(401).json({
          message: "Invalid password"
        });
      }
    });

  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
}
// async function login(req, res) {
//     try {
//         const { Email, password } = req.body;
//         const check = await User.findOne({ Email });
//         console.log(check)  
//         hashy.verify(password, check.password, function (error, success) {
//             if (error) {
//                 return console.error(error);
//             }
//              else {
//         return res.status(401).json({
//           message: "Invalid password"
//         });
//       }
//             if (success) {
//                 res.send("you are now authenticated!");
//             } else {
//                 res.send("invalid password!");
//             }
//         });
//         console.log("user login successfuly");
//     } catch (err) {
//         res.send(
//             "Invalid user", err
//         )

//     }
// }

module.exports = { home, login }