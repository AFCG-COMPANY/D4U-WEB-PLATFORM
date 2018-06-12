'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
const
    email = require('../config/keys').email
    pass = require('../config/keys').password

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass: pass
    }
});

const sendEmail = function (template, email) {

    var mailOptions = {
        from: config.emailInfo.email,
        to: email,
        subject: 'Sending Email using Node.js',
        text: template
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            throw error;
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function sendEmailForNewUser(userAnswer, rightAnswer, systemType) {

}
exports.sendEmailForNewUser = sendEmailForNewUser;

