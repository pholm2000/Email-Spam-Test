const nodemailer = require('nodemailer');

// Email konfiguration
const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025, // SMTP port
    secure: false, // true for 465, false for andre porte
    auth: {
        user: 'your_email@example.com', // Din email
        pass: 'your_password' // Din adgangskode
    }
});

// Email sending function
function sendEmail() {
    const mailOptions = {
        from: 'your_email@example.com', // Senders email
        to: 'recipient@example.com', // Modtager
        subject: 'Test Email', // Emne
        text: 'This is a test email.' // Tekst
    };

    // Sending af email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error.message);
            return;
        }
        console.log('Email sent:', info.messageId);
    });
}

// Send email hvert 5. sekundt
setInterval(sendEmail, 5000);