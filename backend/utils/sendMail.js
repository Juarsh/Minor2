const nodemailer = require('nodemailer')

const sendMail = (email, token) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: 'Account activation link',
        html: `
            <h1>Please Clink the link to Activate</h1>
            <p><a href='${process.env.CLIENT_URL}/stark/activate/${token}'>Link</a></p>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendMail;