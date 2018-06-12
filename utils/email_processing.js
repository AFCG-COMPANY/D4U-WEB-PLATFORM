'use strict';
const nodemailer = require('nodemailer')
const email = require('../config/keys').email
const password = require('../config/keys').password


Object.defineProperty(exports, "__esModule", { value: true });

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass: password
    }
});

const sendEmail = function (template, subject, email) {

    var mailOptions = {
        from: email,
        to: email,
        subject: subject,
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

function sendEmailForNewUser(email, token) {
    sendEmail(token, 'тест', email)

}

function sendEmailForgotPassword(email, password) {
    sendEmail(password, 'забыли пароль', email)
}

exports.sendEmailForNewUser = sendEmailForNewUser
exports.sendEmailForgotPassword = sendEmailForgotPassword

