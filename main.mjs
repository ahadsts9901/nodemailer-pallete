import nodemailer from "nodemailer" // install from npm and import

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL, // sender email
        pass: process.env.EMAIL_PASSWORD // security generated password
    }
});

const mailOptions = {
    from: `<${process.env.EMAIL}>`, // sender email
    to: user.email,  // reciver email
    subject: 'Hello', // subject
    text: `Hi` // text
};

await transporter.sendMail(mailOptions);