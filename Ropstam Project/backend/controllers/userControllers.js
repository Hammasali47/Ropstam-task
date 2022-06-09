const User = require("../model/UserModel");
const nodemailer = require("nodemailer");
var generator = require("generate-password");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    var password = generator.generate({
      length: 10,
      numbers: true,
    });

    const user = await User.find({ email });

    if (user.length > 0) {
      res.status(201).send({ message: "User Already Register", success: true });
    } else {
      const newUser = new User({ name, email, password });

      await newUser.save();

      //   create reusable transporter object using the default SMTP transport
      //   let transporter = nodemailer.createTransport({
      //     host: 'smtp.gmail.com',
      //     port: 465,
      //     secure: true,
      //     auth: {
      //       user: 'contact@gmail.com',
      //       pass: 'app password',
      //     },
      //   });

      //   // send mail with defined transport object
      //   let info = await transporter.sendMail({
      //     from: '"Fred Foo 👻" <gmail.user@gmail.com>', // sender address
      //     to: email, // list of receivers
      //     subject: "Sign UP ✔", // Subject line
      //     text: "lets login", // plain text body
      //     html: `<b>Hello ${name}</b>
      //     <p>your email is ${email} and password is ${password}</p>
      //     `, // html body
      //   });

      async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          service: "gmail",
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
          },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: "hammasali47@gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }

      main().catch(console.error);

      res
        .status(201)
        .send({ message: "User Registered Successfully", success: true });
    }
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ message: error, success: false });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.find({ email });

    if (user.length > 0) {
      const CurrentUser = {
        name: user[0].name,
        email: user[0].email,
        _id: user[0]._id,
        token: generateToken(user[0]._id),
      };
      // vTspzNeQWD

      res.send({
        data: CurrentUser,
        message: "User Login Success",
        success: true,
      });
    } else {
      return res.status(400).json({ message: "User Not Found", success: true });
    }
  } catch (error) {
    console.log("error", error);

    return res
      .status(400)
      .json({ message: "User Login Failed", success: false });
  }
};

module.exports = { registerUser, loginUser };
