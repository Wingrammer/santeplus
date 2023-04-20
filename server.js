const path = require("path");
var cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const app = express();
const fs = require("fs");
require("dotenv").config();

const publicPath = path.join(__dirname, ".", "src");
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: ["http://127.0.0.1:5501"],
  credentials: true,
  optionSuccessStatus: 200,
};

const Maizzle = require("@maizzle/framework");
const testNom = "Konou";
const testPrenom = "Winner";
const testMessage = "jdkvjnk skvjjk ksjdvkj jvksvj jsdkvdjvkj ksjdvdv";
const testEmail = "wilpar49@gmail.com";

const template = `---
title: Merci de nous avoir contacté
---

<!DOCTYPE html>
<html>
  <head>
    <style>{{{ page.css }}}</style>
  </head>
  
  <body class="md:p-10 no-scrollbar">
  <div class="flex items-center justify-center backdrop-blur-flou bg-white/5 md:h-[93vh] overflow-y-scroll overflow-x-hidden cool-scroll rounded-3xl relative">
  <div class="flex h-screen w-screen items-center justify-center">
  <div class="swiper bg-opacity-50 bg-goldHead/50">
      <div class="swiper-wrapper bg-opacity-50 bg-goldHead/50" id="service">
         <div class="swiper-slide p-4 rounded-lg shadow-lg cursor-pointer service backdrop-blur-sm bg-white/10 hover:bg-white/20 shadow-goldHead ring-1 ring-goldHead js-show-on-scroll">
            <div class="flex items-center justify-center w-auto h-auto my-4">
               <a href="#" class="hover:opacity-50">
                  <img src="./images/logoSansFond.png" alt="" width="100">
               </a>
            </div>
            <div class="text-white">
               <p class="my-3 text-3xl font-bold text-center text-white ">
                  MERCI DE NOUS AVOIR CONTACTE
               </p>
               <p class="my-3 font-semibold text-lg w-10/12 text-left text-white">
                  Bonjour Mr/Mme ${testPrenom} ${testNom},
               </p>
               <p class="my-3 font-semibold text-lg w-10/12 text-left text-white">
                  Nous accusons bonne réception de votre message:
               </p>
               <p class="p-5 font-semibold text-md w-10/12 my-3 text-left text-white">
                  ${testMessage}
               </p>
               <p class="my-3 font-semibold text-lg w-10/12 text-left text-white">
                  Nous vous remercions de l’intérêt que vous portez à notre agence et nos services.
               </p>
               <p class="my-3 font-semibold text-lg w-10/12 text-left text-white">
                  Nous allons étudions votre demande et vous répondre dès que possible.
               </p>
               <p class="my-3 font-semibold text-lg text-center text-white">
                  Go Ahead And Be The Head
               </p>
            </div>
            <div class="text-white flex flex-col space-y-2">
               <span class="flex">
                  <strong>
                     <i class="las la-map-marker"></i>
                     Adresse:
                  </strong>
                  Lomé, Adidogomé
               </span>
               <span class="flex">
                  <strong>
                     <i class="las la-phone"></i>
                     Phone:
                  </strong>
                  +22897262082
               </span>
               <span class="flex">
                  <strong>
                     <i class="las la-envelope"></i>Email:
                  </strong>
                  support@headcorpafrica.com
               </span>
            </div>
            <div class="flex h-20 items-center justify-center space-x-5 text-2xl">
               <a class="flex h-20 items-center justify-center" href="https://www.instagram.com/head_corporation/?hl=en">
                  <img height=80 width="50" src="./images/insta.png" class="hover:opacity-60"></img>
               </a>
               <a class="flex h-20 items-center justify-center" href="https://www.facebook.com/Hcorpsarl">
                  <img height=80 width="50" src="./images/face.png" class="hover:opacity-60"></img>
               </a>
               <a class="flex h-20 items-center justify-center" href="https://www.linkedin.com/in/head-corporation-430970218/">
                  <img height=80 width="50" src="./images/link.png" class="hover:opacity-60"></img>
               </a>
            </div>
         </div>           
      </div>
  </div>
  </div>              
  </div>
  </body>
</html>`;

app.use(express.json());
app.use(express.static(publicPath));

async function sendEmail(nom, prenom, email, message) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  console.log(process.env.HOST);
  console.log(process.env.EMAILUSERNAME);
  console.log(process.env.PASS);
  console.log(process.env.EMAILPORT);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: process.env.HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAILUSERNAME, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
    })
  );

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "wilpar49@gmail.com", // sender address
    to: `${email}`, // list of receivers
    subject: "Message envoyé ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

app.options("/newsletter", cors(corsOptions));
app.post("/newsletter", (req, res) => {
  const { nom, prenom, email, message } = req.body;
  console.log(nom);
});
app.get("/test_maizzle", (req, res) => {
  Maizzle.render(template, {
    tailwind: {
      config: require("./tailwind.config.js"),
      css: `${fs.readFileSync("./src/style.css")}`,
    },
    maizzle: require("./config.js"),
  })
    .then(({ html }) => res.send(html))
    .catch((error) => {
      res.statusCode(500).send("Error");
      console.log(error);
    });
});
app.get("/test_send", (req, res) => {
  sendEmail(testNom, testPrenom, testEmail, testMessage)
    .then(() => res.sendStatus(200))
    .catch((e) => res.send(e.message));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});